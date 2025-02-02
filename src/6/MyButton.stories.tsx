import MyButton from "./MyButton";

export default {
  title: "Components/MyButton",
  component: MyButton,
};

export const Index = {
  args: {
    primary: true,
    size: "medium",
    label: "ボタン",
    onClick: () => console.log("Hello, Storybook!!"),
  },
};

export const White = {
  args: {
    size: "small",
    label: "ボタン",
    backgroundColor: "#fff",
  },
};

export const Yellow = {
  args: {
    ...White.args,
    backgroundColor: "lightyellow",
  },
};
