var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from 'apollo-boost';
export var CompleteUserClassMutation = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    mutation CompleteUserClass($input: CompleteUserClassInput!) {\n        completeUserClass(input: $input) {\n            completedClass {\n                sku\n            }\n        }\n    }\n"], ["\n    mutation CompleteUserClass($input: CompleteUserClassInput!) {\n        completeUserClass(input: $input) {\n            completedClass {\n                sku\n            }\n        }\n    }\n"])));
export var HideUserClassMutation = gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    mutation HideUserClass($input: HideUserClassInput!) {\n        hideUserClass(input: $input) {\n            hiddenClass {\n                sku\n            }\n        }\n    }\n"], ["\n    mutation HideUserClass($input: HideUserClassInput!) {\n        hideUserClass(input: $input) {\n            hiddenClass {\n                sku\n            }\n        }\n    }\n"])));
export var SaveClassMutation = gql(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    mutation SaveUserClass($input: SaveUserClassInput!) {\n        saveUserClass(input: $input) {\n            savedClass {\n                sku\n            }\n        }\n    }\n"], ["\n    mutation SaveUserClass($input: SaveUserClassInput!) {\n        saveUserClass(input: $input) {\n            savedClass {\n                sku\n            }\n        }\n    }\n"])));
export var UnsaveClassMutation = gql(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    mutation UnsaveUserClass($input: UnsaveUserClassInput!) {\n        unsaveUserClass(input: $input) {\n            unsavedClass {\n                sku\n            }\n        }\n    }\n"], ["\n    mutation UnsaveUserClass($input: UnsaveUserClassInput!) {\n        unsaveUserClass(input: $input) {\n            unsavedClass {\n                sku\n            }\n        }\n    }\n"])));
export var DismissWelcomeContentSectionMutation = gql(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    mutation DismissWelcomeContentSection($input: DismissWelcomeContentSectionInput!) {\n        dismissWelcomeContentSection(input: $input) {\n            clientMutationId\n            success\n        }\n    }\n"], ["\n    mutation DismissWelcomeContentSection($input: DismissWelcomeContentSectionInput!) {\n        dismissWelcomeContentSection(input: $input) {\n            clientMutationId\n            success\n        }\n    }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=mutations.js.map