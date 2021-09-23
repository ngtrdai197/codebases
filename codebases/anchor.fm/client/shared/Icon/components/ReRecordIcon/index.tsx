import React from 'react';

type FillColor = string;
type ClassName = string;

interface Props {
  fillColor: FillColor;
  className: ClassName;
}

const defaultProps = {
  className: '',
  fillColor: '#53585E',
};

const ReRecordIcon = ({
  fillColor,
  className,
}: Props): React.ReactElement<React.ReactNode> => (
  <svg
    viewBox="0 0 14 22"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <g>
        <path
          d="M11.0889724,13.1181047 C10.7354375,13.0400522 10.3707961,13 9.99999143,13 C9.93842032,13 9.87701913,13.0011043 9.81581051,13.0033035 C9.95202253,12.5681367 10.0256134,12.1043448 10.0256134,11.6232178 L10.0256134,7.75569779 C10.0256134,7.39960087 10.3060534,7.11111111 10.6522142,7.11111111 C10.9981377,7.11111111 11.278815,7.39960087 11.278815,7.75569779 L11.278815,11.6232178 C11.278815,12.1399199 11.2127928,12.6410304 11.0889724,13.1181047 Z M7.353077,22.244864 L2.89954139,22.244864 C2.55338061,22.244864 2.2727033,21.9563742 2.2727033,21.6002773 C2.2727033,21.2441804 2.55314335,20.9556907 2.89930413,20.9556907 L5.01280668,20.9556907 L5.01280668,18.3590821 C5.09551597,19.5172651 5.57884616,20.6519409 6.46281002,21.5354795 C6.73548515,21.8080629 7.03409434,22.0452894 7.353077,22.244864 Z M5.01280668,17.6407476 L5.01280668,17.3876435 C2.1970177,17.0659603 -2.66453526e-14,14.6040346 -2.66453526e-14,11.6232178 L-2.66453526e-14,7.75569779 C-2.66453526e-14,7.39960087 0.280440056,7.11111111 0.626600836,7.11111111 C0.972761615,7.11111111 1.25320167,7.39960087 1.25320167,7.75569779 L1.25320167,11.6232178 C1.25320167,14.0154498 3.07217245,15.9787517 5.3620933,16.1264095 C5.16609629,16.6130913 5.04966705,17.1245869 5.01280668,17.6407476 Z"
          fill={fillColor}
        />
        <path
          d="M5.61903274,14.3372396 C7.39600475,14.3372396 8.84155133,12.7848771 8.84155133,10.8765992 L8.84155133,3.46064038 C8.84155133,1.55236245 7.39600475,2.84217094e-14 5.61903274,2.84217094e-14 C3.84206073,2.84217094e-14 2.39651416,1.55236245 2.39651416,3.46064038 L2.39651416,10.8763652 C2.39651416,12.7848771 3.84206073,14.3372396 5.61903274,14.3372396 Z"
          fill={fillColor}
        />
        <g transform="translate(6 14)">
          <path
            d="M6.54713091,1.14547336 C5.82254912,0.406862709 4.85917275,0 3.83441609,0 C2.80965943,0 1.84628306,0.406862709 1.12170127,1.14547336 C-0.373917941,2.67048524 -0.373917941,5.15173699 1.12180637,6.6766417 C1.84638816,7.41546667 2.80976453,7.82222222 3.83452119,7.82222222 C4.85917275,7.82222222 5.82254912,7.41535951 6.54713091,6.67674886 C8.04275012,5.15173699 8.04275012,2.67048524 6.54713091,1.14547336 Z"
            fill={fillColor}
            fillRule="nonzero"
          />
          <path
            d="M5.30019556,2.41602275 L5.30019556,2.41602275 C5.21131169,2.3253612 5.06576137,2.32392011 4.97509983,2.41280398 C4.97401631,2.41386625 4.97294333,2.41493923 4.97188106,2.41602275 L3.83442266,3.57623032 L2.69696426,2.41602275 C2.60808039,2.3253612 2.46253007,2.32392011 2.37186852,2.41280398 C2.370785,2.41386625 2.36971203,2.41493923 2.36864975,2.41602275 L2.36864975,2.41602275 C2.27746714,2.50902902 2.27746714,2.65789727 2.36864975,2.75090354 L3.50610816,3.91111111 L2.36864975,5.07131868 C2.27746714,5.16432495 2.27746714,5.3131932 2.36864975,5.40619947 L2.36864975,5.40619947 C2.45753362,5.49686102 2.60308394,5.49830211 2.69374549,5.40941824 C2.69482901,5.40835597 2.69590198,5.40728299 2.69696426,5.40619947 L3.83442266,4.2459919 L4.97188106,5.40619947 C5.06076493,5.49686102 5.20631525,5.49830211 5.29697679,5.40941824 C5.29806031,5.40835597 5.29913329,5.40728299 5.30019556,5.40619947 L5.30019556,5.40619947 C5.39137818,5.3131932 5.39137818,5.16432495 5.30019556,5.07131868 L4.16273716,3.91111111 L5.30019556,2.75090354 C5.39137818,2.65789727 5.39137818,2.50902902 5.30019556,2.41602275 Z"
            stroke="#FFF"
            strokeWidth="0.5"
            fill="#FFF"
          />
        </g>
      </g>
    </g>
  </svg>
);

ReRecordIcon.defaultProps = defaultProps;

export default ReRecordIcon;