# UI proxy project
UIのページ(ui.html)と実行ページ(v.html)の2つで構成されるwebアプリ
UIページにある各種UIの入力状態をサーバにリアルタイム(JSON API)で送る
UI部品はボタン、text,range,select,radio,checkbox等を想定
v.htmlはwebsocketでサーバと接続されUIの更新状態をpushで受け取る
v.htmlはサーバから通知された状態を簡易表示

 - server はnode.js expressで構成
 - portはconfigファイルで設定
 - 自己証明書でssl対応
 - uiページはvue3 global api で構成
 - uiデザインはbootstrap ダークモード responsible