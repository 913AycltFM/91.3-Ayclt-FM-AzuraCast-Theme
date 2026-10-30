/* 91.3 Ayclt FM — Public Pages customization
 * Browser-tab title branding for AzuraCast public pages.
 */
(() => {
    const pageTitle = "91.3 Ayclt FM | Dickinson's Texas #1 Hit Music Station";

    const setPageTitle = () => {
        document.title = pageTitle;
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", setPageTitle, { once: true });
    } else {
        setPageTitle();
    }
})();
