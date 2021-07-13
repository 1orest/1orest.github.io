search_input = document.getElementById("search_input");
search_btn = document.getElementById("search_btn");

selected_site_check = document.getElementById("selected_site_check");
selected_site_input = document.getElementById("selected_site_input");

selected_files_check = document.getElementById("selected_files_check");
selected_files_input = document.getElementById("selected_files_input");

let searchers = [
    ['google_check', 'https://www.google.com/search?q='],
    ['yandex_check', 'https://yandex.ru/search/?text='],
    ['duckduckgo_check', 'https://duckduckgo.com/?q='],
    ['bing_check', 'https://www.bing.com/search?q='],
    ['yahoo_check', 'https://search.yahoo.com/search?p=']
];
searchers.reverse();


search_input.focus();


search_input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        search_btn.click();
    }
});

selected_site_input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        search_input.focus();
    }
});

selected_files_input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        search_input.focus();
    }
});

function selected_sites_check_change() {
    if (selected_site_check.checked) {
        selected_site_input.disabled = false;
        selected_site_input.focus();
    } else {
        selected_site_input.disabled = true;
    }

}

function selected_files_check_change() {
    if (selected_files_check.checked) {
        selected_files_input.disabled = false;
        selected_files_input.focus();
    } else {
        selected_files_input.disabled = true;
    }

}

function search() {
    query = search_input.value;
    site = ''
    filetype_yandex = ''
    filetype = ''

    if (selected_site_check.checked) {
        site = ' site:' + selected_site_input.value;

    }

    if (selected_files_check.checked) {
        filetype = ' filetype:' + selected_files_input.value;
        filetype_yandex = ' mime:' + selected_files_input.value;
    }


    for (var i = 0; i < searchers.length; i++) {
        if (document.getElementById(searchers[i][0]).checked) {
            if (searchers[i][0] != "yandex_check") {
                query1 = query + site + filetype;
            } else {
                query1 = query + site + filetype_yandex;
            }

            query1 = query1.replace(/null/g, "");
            query_url = encodeURI(query1);

            window.open(searchers[i][1] + query_url);
        }
    }
}