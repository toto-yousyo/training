import React from "react";
//Titleを渡すためのContextを作成
const TitleContext = React.createContext("");

//TItleコンポーネントの中でContext後を参照する
const Title = () => {
  // Consumerを使用してContextの値を参照する
  return (
    <TitleContext.Consumer>
      {/* Consumer直下に関数を置いて、Contextの値を参照する*/}
      {(title) => {
        return <h1>{title}</h1>;
      }}
    </TitleContext.Consumer>
  );
};

const Header = () => {
  return (
    <div>
      {/* Header からTitleへは何もデータを渡しません*/}
      <Title />
    </div>
  );
};

// Pageコンポーネントの中でContextに値を渡します
const Page = () => {
  const title = "Aotsubu Book";

  // Provider, を使いContextに値をセットします。
  // Provider, 以下のコンポーネントから値を参照できます
  return (
    <TitleContext.Provider value={title}>
      <Header />
    </TitleContext.Provider>
  );
};
export default Page;
