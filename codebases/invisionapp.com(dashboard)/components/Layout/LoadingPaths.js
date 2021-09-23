import React, { PureComponent, Fragment } from 'react'
import isEqual from 'lodash/isEqual'
import { generateLoadingPlaceholderColumnCount } from '../../utils/documentGrid'

const DOCUMENT_TILES = 12
const SPACE_TILES = 21
const SIDEBAR_SPACE_LIST = 8
const COMPACT_SPACE_TILES = 3

class LoadingPaths extends PureComponent {
  state = {
    gutterWidth: 16,
    columnCount: 1,
    cellWidth: 0,
    cellHeight: 0,
    sidebarWidth: 0,
    gridWidth: 0
  }

  componentDidMount () {
    this.generateGridValues()
    window.addEventListener('resize', this.generateGridValues)
  }

  componentDidUpdate (prev) {
    if (!isEqual(this.props.mqs, prev.mqs)) {
      this.generateGridValues()
    }
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.generateGridValues)
  }

  generateGridValues = () => {
    const { mqs } = this.props
    const { lDown } = mqs
    const gutterWidth = lDown ? 16 : 32
    const contentGutter = lDown ? 16 : 64
    const columnCount = generateLoadingPlaceholderColumnCount(mqs)
    const sidebarWidth = lDown ? 0 : 280
    const windowWidth = document.body.clientWidth
    const gridWidth = windowWidth - sidebarWidth - (contentGutter * 2)
    const cellWidth = (gridWidth - (gutterWidth * (columnCount - 1))) / columnCount
    const cellHeight = this.generateCellHeight(gutterWidth, cellWidth)

    this.setState(() => ({
      gutterWidth,
      columnCount,
      sidebarWidth,
      contentGutter,
      gridWidth,
      cellWidth,
      cellHeight
    }))
  }

  generateCellHeight = (gutterWidth, cellWidth) => {
    // WIdth of border around a Tile
    const borderWidth = 0
    // Width of the padding around the Tile
    const tilePadding = 0
    // The Tile title/date etc has a fixed height
    const infoPanelHeight = 85
    // Image ratio
    const imageRatio = 0.75
    const imageWidth = cellWidth - (borderWidth * 2) - (tilePadding * 2)
    const imageHeight = imageWidth * imageRatio

    return (borderWidth * 2) + (tilePadding * 2) + imageHeight + infoPanelHeight + gutterWidth
  }

  renderSpaceTile (i, x, y) {
    return (
      <Fragment key={`compactspacetile${i}`}>
        <path transform={`translate(${x + 0}, ${y + 0})`} d='M365,94H9a9,9,0,0,1-9-9V9A9,9,0,0,1,9,0H365a9,9,0,0,1,9,9V85A9,9,0,0,1,365,94ZM9,2A7,7,0,0,0,2,9V85a7,7,0,0,0,7,7H365a7,7,0,0,0,7-7V9a7,7,0,0,0-7-7Z' />
        <path transform={`translate(${x + 24}, ${y + 24})`} d='M20.5031088,0.403721144 L36.5031088,9.66687904 C37.4295597,10.2032453 38,11.192644 38,12.2631579 L38,30.8038426 C38,31.8743565 37.4295597,32.8637552 36.5031088,33.4001215 L20.5031088,42.6632794 C19.5733268,43.2015742 18.4266732,43.2015742 17.4968912,42.6632794 L1.49689119,33.4001215 C0.570440289,32.8637552 -4.40373539e-15,31.8743565 -3.10862447e-15,30.8038426 L0,12.2631579 C-1.31100147e-16,11.192644 0.570440289,10.2032453 1.49689119,9.66687904 L17.4968912,0.403721144 C18.4266732,-0.134573715 19.5733268,-0.134573715 20.5031088,0.403721144 Z' fill='black' />
        <rect transform={`translate(${x + 78}, ${y + 30})`} width='144' height='12' rx='6' />
        <rect transform={`translate(${x + 78}, ${y + 50})`} width='222' height='12' rx='6' />
      </Fragment>
    )
  }

  renderSidebarSpaceTile (i, x, y) {
    const { gridWidth } = this.state
    return (
      <Fragment key={`sidebarSpaceTile${i}`}>
        <rect transform={`translate(${x}, ${y})`} width='256' height='16' x='0' y='32' rx='6' />
        <rect transform={`translate(${x}, ${y})`} width={gridWidth} height='1' x='0' y='80' rx='0' />
        <rect transform={`translate(${x}, ${y})`} width={gridWidth} height='1' x='0' y='0' rx='0' />
      </Fragment>
    )
  }

  render () {
    const { gutterWidth, cellWidth, columnCount, cellHeight } = this.state
    return (
      <svg width='0' height='0'>
        <defs>
          <clipPath id='documentsClip'>
            {Array.apply(0, Array(DOCUMENT_TILES)).map((_, i) => {
              const x = 300 * (i % 4)
              const yInc = 281 * Math.floor(i / 4)

              return (
                <Fragment key={`doctile${i}`}>
                  <rect x={x} y={0 + yInc} width='276' height='185' rx='8' />
                  <rect x={x} y={205 + yInc} width='144' height='12' rx='6' />
                  <rect x={x} y={225 + yInc} width='222' height='12' rx='6' />
                </Fragment>
              )
            })}
          </clipPath>

          <clipPath id='sidebarDocumentsClip'>
            {Array.apply(0, Array(DOCUMENT_TILES)).map((_, i) => {
              const x = (cellWidth * (i % columnCount)) + (gutterWidth * (i % columnCount))
              const width = cellWidth
              const y = (cellHeight * Math.floor(i / columnCount)) + (gutterWidth * (Math.floor(i / columnCount)))
              const height = cellHeight

              return (
                <Fragment key={`doctile${i}`}>
                  <rect x={x} y={y} width={width} height={height} rx='4' />
                </Fragment>
              )
            })}
          </clipPath>

          <clipPath id='spacesClip'>
            {Array.apply(0, Array(SPACE_TILES)).map((_, i) => {
              const transX = 401 * (i % 3)
              const yInc = 140 * Math.floor(i / 3)

              return this.renderSpaceTile(i, transX, yInc)
            })}
          </clipPath>

          <clipPath id='compactSpacesClip'>
            {Array.apply(0, Array(COMPACT_SPACE_TILES)).map((x, i) => {
              const transX = 401 * (i % 3)

              return this.renderSpaceTile(i, transX, 0)
            })}
          </clipPath>

          <clipPath id='sidebarSpacesClip'>
            {Array.apply(0, Array(SIDEBAR_SPACE_LIST)).map((_, i) => {
              const yInc = 80 * i

              return this.renderSidebarSpaceTile(i, 0, yInc)
            })}
          </clipPath>

          <clipPath id='batchDocumentsClip'>
            <path d='M34,4 C34,1.79234314 35.7923279,0 38,0 L136,0 C138.207642,0 140,1.79234314 140,4 L140,8 C140,10.2076569 138.207642,12 136,12 L38,12 C35.7923279,12 34,10.2076569 34,8 L34,4 Z M0,17 C0,12.0327606 4.03277588,8 9,8 C13.9672241,8 18,12.0327606 18,17 C18,21.9672394 13.9672241,26 9,26 C4.03277588,26 0,21.9672394 0,17 Z M33,25 C33,22.7923431 34.7923279,21 37,21 L81,21 C83.2076721,21 85,22.7923431 85,25 L85,29 C85,31.2076569 83.2076721,33 81,33 L37,33 C34.7923279,33 33,31.2076569 33,29 L33,25 Z M105,25 C105,22.7923431 106.792328,21 109,21 L184,21 C186.207642,21 188,22.7923431 188,25 L188,29 C188,31.2076569 186.207642,33 184,33 L109,33 C106.792328,33 105,31.2076569 105,29 L105,25 Z M208,25 C208,22.7923431 209.792358,21 212,21 L315,21 C317.207642,21 319,22.7923431 319,25 L319,29 C319,31.2076569 317.207642,33 315,33 L212,33 C209.792358,33 208,31.2076569 208,29 L208,25 Z M93,27 C93,25.8961639 93.8961792,25 95,25 C96.1038208,25 97,25.8961639 97,27 C97,28.1038361 96.1038208,29 95,29 C93.8961792,29 93,28.1038361 93,27 Z M196,27 C196,25.8961639 196.896179,25 198,25 C199.103821,25 200,25.8961639 200,27 C200,28.1038361 199.103821,29 198,29 C196.896179,29 196,28.1038361 196,27 Z M34,68 C34,65.7923431 35.7923279,64 38,64 L143,64 C145.207642,64 147,65.7923431 147,68 L147,72 C147,74.2076569 145.207642,76 143,76 L38,76 C35.7923279,76 34,74.2076569 34,72 L34,68 Z M0,81 C0,76.0327606 4.03277588,72 9,72 C13.9672241,72 18,76.0327606 18,81 C18,85.9672394 13.9672241,90 9,90 C4.03277588,90 0,85.9672394 0,81 Z M33,89 C33,86.7923431 34.7923279,85 37,85 L81,85 C83.2076721,85 85,86.7923431 85,89 L85,93 C85,95.2076721 83.2076721,97 81,97 L37,97 C34.7923279,97 33,95.2076721 33,93 L33,89 Z M105,89 C105,86.7923431 106.792328,85 109,85 L184,85 C186.207642,85 188,86.7923431 188,89 L188,93 C188,95.2076721 186.207642,97 184,97 L109,97 C106.792328,97 105,95.2076721 105,93 L105,89 Z M208,89 C208,86.7923431 209.792358,85 212,85 L351,85 C353.207642,85 355,86.7923431 355,89 L355,93 C355,95.2076721 353.207642,97 351,97 L212,97 C209.792358,97 208,95.2076721 208,93 L208,89 Z M93,91 C93,89.8961792 93.8961792,89 95,89 C96.1038208,89 97,89.8961792 97,91 C97,92.1038208 96.1038208,93 95,93 C93.8961792,93 93,92.1038208 93,91 Z M196,91 C196,89.8961792 196.896179,89 198,89 C199.103821,89 200,89.8961792 200,91 C200,92.1038208 199.103821,93 198,93 C196.896179,93 196,92.1038208 196,91 Z M34,132 C34,129.792328 35.7923279,128 38,128 L169,128 C171.207642,128 173,129.792328 173,132 L173,136 C173,138.207672 171.207642,140 169,140 L38,140 C35.7923279,140 34,138.207672 34,136 L34,132 Z M0,145 C0,140.032776 4.03277588,136 9,136 C13.9672241,136 18,140.032776 18,145 C18,149.967224 13.9672241,154 9,154 C4.03277588,154 0,149.967224 0,145 Z M33,153 C33,150.792328 34.7923279,149 37,149 L81,149 C83.2076721,149 85,150.792328 85,153 L85,157 C85,159.207672 83.2076721,161 81,161 L37,161 C34.7923279,161 33,159.207672 33,157 L33,153 Z M105,153 C105,150.792328 106.792328,149 109,149 L184,149 C186.207642,149 188,150.792328 188,153 L188,157 C188,159.207672 186.207642,161 184,161 L109,161 C106.792328,161 105,159.207672 105,157 L105,153 Z M208,153 C208,150.792328 209.792358,149 212,149 L300,149 C302.207642,149 304,150.792328 304,153 L304,157 C304,159.207672 302.207642,161 300,161 L212,161 C209.792358,161 208,159.207672 208,157 L208,153 Z M93,155 C93,153.896179 93.8961792,153 95,153 C96.1038208,153 97,153.896179 97,155 C97,156.103821 96.1038208,157 95,157 C93.8961792,157 93,156.103821 93,155 Z M196,155 C196,153.896179 196.896179,153 198,153 C199.103821,153 200,153.896179 200,155 C200,156.103821 199.103821,157 198,157 C196.896179,157 196,156.103821 196,155 Z M34,196 C34,193.792328 35.7923279,192 38,192 L199,192 C201.207642,192 203,193.792328 203,196 L203,200 C203,202.207672 201.207642,204 199,204 L38,204 C35.7923279,204 34,202.207672 34,200 L34,196 Z M0,209 C0,204.032776 4.03277588,200 9,200 C13.9672241,200 18,204.032776 18,209 C18,213.967224 13.9672241,218 9,218 C4.03277588,218 0,213.967224 0,209 Z M33,217 C33,214.792328 34.7923279,213 37,213 L81,213 C83.2076721,213 85,214.792328 85,217 L85,221 C85,223.207672 83.2076721,225 81,225 L37,225 C34.7923279,225 33,223.207672 33,221 L33,217 Z M105,217 C105,214.792328 106.792328,213 109,213 L184,213 C186.207642,213 188,214.792328 188,217 L188,221 C188,223.207672 186.207642,225 184,225 L109,225 C106.792328,225 105,223.207672 105,221 L105,217 Z M208,217 C208,214.792328 209.792358,213 212,213 L329,213 C331.207642,213 333,214.792328 333,217 L333,221 C333,223.207672 331.207642,225 329,225 L212,225 C209.792358,225 208,223.207672 208,221 L208,217 Z M93,219 C93,217.896179 93.8961792,217 95,217 C96.1038208,217 97,217.896179 97,219 C97,220.103821 96.1038208,221 95,221 C93.8961792,221 93,220.103821 93,219 Z M196,219 C196,217.896179 196.896179,217 198,217 C199.103821,217 200,217.896179 200,219 C200,220.103821 199.103821,221 198,221 C196.896179,221 196,220.103821 196,219 Z M34,260 C34,257.792328 35.7923279,256 38,256 L150,256 C152.207642,256 154,257.792328 154,260 L154,264 C154,266.207672 152.207642,268 150,268 L38,268 C35.7923279,268 34,266.207672 34,264 L34,260 Z M0,273 C0,268.032776 4.03277588,264 9,264 C13.9672241,264 18,268.032776 18,273 C18,277.967224 13.9672241,282 9,282 C4.03277588,282 0,277.967224 0,273 Z M33,281 C33,278.792328 34.7923279,277 37,277 L81,277 C83.2076721,277 85,278.792328 85,281 L85,285 C85,287.207672 83.2076721,289 81,289 L37,289 C34.7923279,289 33,287.207672 33,285 L33,281 Z M105,281 C105,278.792328 106.792328,277 109,277 L184,277 C186.207642,277 188,278.792328 188,281 L188,285 C188,287.207672 186.207642,289 184,289 L109,289 C106.792328,289 105,287.207672 105,285 L105,281 Z M208,281 C208,278.792328 209.792358,277 212,277 L303,277 C305.207642,277 307,278.792328 307,281 L307,285 C307,287.207672 305.207642,289 303,289 L212,289 C209.792358,289 208,287.207672 208,285 L208,281 Z M93,283 C93,281.896179 93.8961792,281 95,281 C96.1038208,281 97,281.896179 97,283 C97,284.103821 96.1038208,285 95,285 C93.8961792,285 93,284.103821 93,283 Z M196,283 C196,281.896179 196.896179,281 198,281 C199.103821,281 200,281.896179 200,283 C200,284.103821 199.103821,285 198,285 C196.896179,285 196,284.103821 196,283 Z M34,324 C34,321.792328 35.7923279,320 38,320 L193,320 C195.207642,320 197,321.792328 197,324 L197,328 C197,330.207672 195.207642,332 193,332 L38,332 C35.7923279,332 34,330.207672 34,328 L34,324 Z M0,337 C0,332.032776 4.03277588,328 9,328 C13.9672241,328 18,332.032776 18,337 C18,341.967224 13.9672241,346 9,346 C4.03277588,346 0,341.967224 0,337 Z M33,345 C33,342.792328 34.7923279,341 37,341 L81,341 C83.2076721,341 85,342.792328 85,345 L85,349 C85,351.207642 83.2076721,353 81,353 L37,353 C34.7923279,353 33,351.207642 33,349 L33,345 Z M105,345 C105,342.792328 106.792328,341 109,341 L184,341 C186.207642,341 188,342.792328 188,345 L188,349 C188,351.207642 186.207642,353 184,353 L109,353 C106.792328,353 105,351.207642 105,349 L105,345 Z M208,345 C208,342.792328 209.792358,341 212,341 L368,341 C370.207642,341 372,342.792328 372,345 L372,349 C372,351.207642 370.207642,353 368,353 L212,353 C209.792358,353 208,351.207642 208,349 L208,345 Z M93,347 C93,345.896179 93.8961792,345 95,345 C96.1038208,345 97,345.896179 97,347 C97,348.103821 96.1038208,349 95,349 C93.8961792,349 93,348.103821 93,347 Z M196,347 C196,345.896179 196.896179,345 198,345 C199.103821,345 200,345.896179 200,347 C200,348.103821 199.103821,349 198,349 C196.896179,349 196,348.103821 196,347 Z M34,388 C34,385.792358 35.7923279,384 38,384 L136,384 C138.207642,384 140,385.792358 140,388 L140,392 C140,394.207642 138.207642,396 136,396 L38,396 C35.7923279,396 34,394.207642 34,392 L34,388 Z M0,401 C0,396.032776 4.03277588,392 9,392 C13.9672241,392 18,396.032776 18,401 C18,405.967224 13.9672241,410 9,410 C4.03277588,410 0,405.967224 0,401 Z M33,409 C33,406.792358 34.7923279,405 37,405 L81,405 C83.2076721,405 85,406.792358 85,409 L85,413 C85,415.207642 83.2076721,417 81,417 L37,417 C34.7923279,417 33,415.207642 33,413 L33,409 Z M105,409 C105,406.792358 106.792328,405 109,405 L184,405 C186.207642,405 188,406.792358 188,409 L188,413 C188,415.207642 186.207642,417 184,417 L109,417 C106.792328,417 105,415.207642 105,413 L105,409 Z M208,409 C208,406.792358 209.792358,405 212,405 L329,405 C331.207642,405 333,406.792358 333,409 L333,413 C333,415.207642 331.207642,417 329,417 L212,417 C209.792358,417 208,415.207642 208,413 L208,409 Z M93,411 C93,409.896179 93.8961792,409 95,409 C96.1038208,409 97,409.896179 97,411 C97,412.103821 96.1038208,413 95,413 C93.8961792,413 93,412.103821 93,411 Z M196,411 C196,409.896179 196.896179,409 198,409 C199.103821,409 200,409.896179 200,411 C200,412.103821 199.103821,413 198,413 C196.896179,413 196,412.103821 196,411 Z M34,452 C34,449.792358 35.7923279,448 38,448 L169,448 C171.207642,448 173,449.792358 173,452 L173,456 C173,458.207642 171.207642,460 169,460 L38,460 C35.7923279,460 34,458.207642 34,456 L34,452 Z M0,465 C0,460.032776 4.03277588,456 9,456 C13.9672241,456 18,460.032776 18,465 C18,469.967224 13.9672241,474 9,474 C4.03277588,474 0,469.967224 0,465 Z M33,473 C33,470.792358 34.7923279,469 37,469 L81,469 C83.2076721,469 85,470.792358 85,473 L85,477 C85,479.207642 83.2076721,481 81,481 L37,481 C34.7923279,481 33,479.207642 33,477 L33,473 Z M105,473 C105,470.792358 106.792328,469 109,469 L184,469 C186.207642,469 188,470.792358 188,473 L188,477 C188,479.207642 186.207642,481 184,481 L109,481 C106.792328,481 105,479.207642 105,477 L105,473 Z M208,473 C208,470.792358 209.792358,469 212,469 L300,469 C302.207642,469 304,470.792358 304,473 L304,477 C304,479.207642 302.207642,481 300,481 L212,481 C209.792358,481 208,479.207642 208,477 L208,473 Z M93,475 C93,473.896179 93.8961792,473 95,473 C96.1038208,473 97,473.896179 97,475 C97,476.103821 96.1038208,477 95,477 C93.8961792,477 93,476.103821 93,475 Z M196,475 C196,473.896179 196.896179,473 198,473 C199.103821,473 200,473.896179 200,475 C200,476.103821 199.103821,477 198,477 C196.896179,477 196,476.103821 196,475 Z M34,516 C34,513.792358 35.7923279,512 38,512 L199,512 C201.207642,512 203,513.792358 203,516 L203,520 C203,522.207642 201.207642,524 199,524 L38,524 C35.7923279,524 34,522.207642 34,520 L34,516 Z M0,529 C0,524.032776 4.03277588,520 9,520 C13.9672241,520 18,524.032776 18,529 C18,533.967224 13.9672241,538 9,538 C4.03277588,538 0,533.967224 0,529 Z M33,537 C33,534.792358 34.7923279,533 37,533 L81,533 C83.2076721,533 85,534.792358 85,537 L85,541 C85,543.207642 83.2076721,545 81,545 L37,545 C34.7923279,545 33,543.207642 33,541 L33,537 Z M105,537 C105,534.792358 106.792328,533 109,533 L184,533 C186.207642,533 188,534.792358 188,537 L188,541 C188,543.207642 186.207642,545 184,545 L109,545 C106.792328,545 105,543.207642 105,541 L105,537 Z M208,537 C208,534.792358 209.792358,533 212,533 L329,533 C331.207642,533 333,534.792358 333,537 L333,541 C333,543.207642 331.207642,545 329,545 L212,545 C209.792358,545 208,543.207642 208,541 L208,537 Z M93,539 C93,537.896179 93.8961792,537 95,537 C96.1038208,537 97,537.896179 97,539 C97,540.103821 96.1038208,541 95,541 C93.8961792,541 93,540.103821 93,539 Z M196,539 C196,537.896179 196.896179,537 198,537 C199.103821,537 200,537.896179 200,539 C200,540.103821 199.103821,541 198,541 C196.896179,541 196,540.103821 196,539 Z M34,580 C34,577.792358 35.7923279,576 38,576 L150,576 C152.207642,576 154,577.792358 154,580 L154,584 C154,586.207642 152.207642,588 150,588 L38,588 C35.7923279,588 34,586.207642 34,584 L34,580 Z M0,593 C0,588.032776 4.03277588,584 9,584 C13.9672241,584 18,588.032776 18,593 C18,597.967224 13.9672241,602 9,602 C4.03277588,602 0,597.967224 0,593 Z M33,601 C33,598.792358 34.7923279,597 37,597 L81,597 C83.2076721,597 85,598.792358 85,601 L85,605 C85,607.207642 83.2076721,609 81,609 L37,609 C34.7923279,609 33,607.207642 33,605 L33,601 Z M105,601 C105,598.792358 106.792328,597 109,597 L184,597 C186.207642,597 188,598.792358 188,601 L188,605 C188,607.207642 186.207642,609 184,609 L109,609 C106.792328,609 105,607.207642 105,605 L105,601 Z M208,601 C208,598.792358 209.792358,597 212,597 L303,597 C305.207642,597 307,598.792358 307,601 L307,605 C307,607.207642 305.207642,609 303,609 L212,609 C209.792358,609 208,607.207642 208,605 L208,601 Z M93,603 C93,601.896179 93.8961792,601 95,601 C96.1038208,601 97,601.896179 97,603 C97,604.103821 96.1038208,605 95,605 C93.8961792,605 93,604.103821 93,603 Z M196,603 C196,601.896179 196.896179,601 198,601 C199.103821,601 200,601.896179 200,603 C200,604.103821 199.103821,605 198,605 C196.896179,605 196,604.103821 196,603 Z' />
          </clipPath>
        </defs>
      </svg>
    )
  }
}

export default LoadingPaths