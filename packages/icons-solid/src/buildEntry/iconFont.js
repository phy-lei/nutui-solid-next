import IconFont from "../IconFont.vue";
function withInstall(options) {
    options.name = 'IconFont';
    options.install = (app) => {
        app.component('IconFont', options);
    };
    return options;
}
export default withInstall(IconFont);
