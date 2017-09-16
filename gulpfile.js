// モジュール読み込み
var gulp = require("gulp");								// gulpを呼び出す
var browser = require("browser-sync");					// LiveReload環境構築
var connect = require("gulp-connect-php");              // phpを扱うようにする

// サーバー実行
gulp.task("server", function() {
    connect.server({
        base:'./public',                    // ベースとなるフォルダ
        port: 8000,
        bin: 'C:/xampp/php/php.exe',        // [win]xamppのphp.exe （xamppのApacheの起動は不要。必要があればパスを通す。）
        ini: 'C:/xampp/php/php.ini'         // [win]xamppのphp.ini
        // bin: '/Applications/XAMPP/xamppfiles/bin/php',       // [mac]xamppのphp.exe （xamppのApacheの起動は不要。必要があればパスを通す。）
        // ini: '/Applications/XAMPP/xamppfiles/etc/php.ini'    // [mac]xamppのphp.ini

    }, function (){
        browser({
            proxy: 'localhost:8000/',       // proxyを設定することによってこの指定ページを表示するようになる
            files: './public/**/*.*',       // 監視対象のファイル
            port: 3000                      // port番号
        });
    });
});

// 「gulp」で実行のタスク （ファイルの監視/js/sass、サーバー実行）
gulp.task("default",['server'], function() {
    //
});
