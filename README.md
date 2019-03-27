# pomntu

[pomntu](https://yasukotelin.github.io/pomntu)はポモドーロタイマーのWebアプリです。<br>
Activeタイム25分間と休憩時間5分のサイクルを繰り返すためのタイマーアプリになっています。

![image](./res/pomntu-image.png)

## Development

このプロジェクトは[Create React App](https://github.com/facebook/create-react-app)で作られています。

```cmd
git clone https://github.com/yasukotelin/pomntu.git
```

```cmd
npm install
```

### App start

```cmd
npm start
```

アプリをビルドし、http://localhost:3000にてアプリが起動します。

### App deploy

アプリケーションはgithub-pagesにてデプロイしています。<br>
`npm run deploy` を実行することで、github-pages向けにビルドした後、自動でgh-pagesブランチにpushするようになっています。

```cmd
npm run deploy
```