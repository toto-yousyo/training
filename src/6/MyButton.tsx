import PropTypes from "prop-types";
import classNames from "classnames";
import "./stories/button.css";

export default function MyButton({
  primary = false,
  backgroundColor = null,
  size = "medium",
  label = "Button",
  onClick,
  ...props
}) {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  return (
    <button
      type="button"
      className={classNames(
        "storybook-button",
        `storybook-button--${size}`,
        mode,
      )}
      style={backgroundColor ? { backgroundColor } : undefined}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
}

MyButton.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

MyButton.defaultProps = {
  primary: false,
  backgroundColor: null,
  size: "medium",
  label: "Button",
  onClick: undefined,
};
