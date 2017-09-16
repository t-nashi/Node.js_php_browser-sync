# Node.js_php_browser-sync
gulpとbrowser-syncとgulp-connect-phpで同期可能なphp実行環境構築

## このサンプル制作時の環境
* Windows10 Pro、64bit、32GB

## 事前に用意するもの
* Node.js（本サンプル制作時はv8.4.0）
* xampp（xampp Control Panel:v3.2.2, php:5.6.19）

## 開発手順（win:cmd、mac:tarminal）
1. npm install （package.jsonにあるライブラリがインストールされる）
1. gulp （gulpfile.js内のdefaultタスクが実行される。タスク一覧は `gulp --task` で表示）

## npm installでインストールされるライブラリ
* gulp
* gulp-connect-php
* browser-sync

## gulpで実行されること
* publicフォルダ内のindex.phpがブラウザで表示される

## 参考リンク
* [GulpでBrowserSyncと動的ページ(PHPなど)の連携 - Qiita](http://qiita.com/8845musign/items/a3d4956ad138a3062675)
* [gulpでphp環境  ～ gulp-connect-php ～ - Qiita](http://qiita.com/hsakurai2/items/948443ad0b0231d9c269)

## 知っておくと便利なnpmコマンド一覧
* `npm root -g` … グローバルのルート（node_modules）を調べる
* `npm root` … プロジェクトのルート（node_modules）を調べる
* `npm ls -g --depth=0` … グローバルにインストールされているパッケージを確認
* `npm ls --depth=0` … プロジェクトにインストールされているパッケージを確認
* `npm init -y` … package.jsonをプロジェクトに生成（オプション「-y」が全てyes回答のショートカット）
* `npm install xxxxx --save` … プロジェクトにパッケージをインストールし、情報を「package.json」に書き込む（dependencies）
* `npm i xxxxx -s` … 上記のショートカットバージョン
* `npm install xxxxx --save-dev` … プロジェクトにパッケージをインストールし、情報を「package.json」に書き込む（devDependencies-開発用）
* `npm i xxxxx -D` … 上記のショートカットバージョン
* `npm -v` … npmのバージョンを表示
* `npm run` … package.json - scriptに記載した一覧が見れる
* `npm show` … package.jsonを表示
* `npm remove -g xxxxx` … グローバルのパッケージをアンインストール
* `npm remove xxxxx` … プロジェクトのパッケージをアンインストール
