import { registerBlockType } from "@wordpress/blocks";

registerBlockType("bosi-backend-blocks/code", {
  title: "code",
  icon: "align-center",
  category: "text",
  attributes: {
    quote: {
      type: "string",
      source: "html",
      selector: "code",
    },
  },
  supports: {
    anchor: true,
    fontSize: true,
  },
  example: {
    attributes: {
      quote: "Add the code here",
    },
  },
  edit: (props) => {
    const {
      attributes: { quote },
      setAttributes,
    } = props;
    const onChangeQuote = (e) => {
      setAttributes({ quote: e.target.innerText.toString() });
    };
    return (
      <div className="nes-container is-rounded is-dark">
        <pre>
          <code
            onKeyUp={(e) => onChangeQuote(e)}
            onInput={(e) => onChangeQuote(e)}
            role="textbox"
            aria-multiline="true"
            aria-label="Code"
            contenteditable="true"
          >
            {quote}
          </code>
        </pre>
      </div>
    );
  },
  save: (props) => {
    return (
      <div className="nes-container is-rounded is-dark">
        <pre>
          <code
            role="textbox"
            aria-multiline="true"
            aria-label="Code"
            contenteditable="true"
          >
            {props.attributes.quote}
          </code>
        </pre>
      </div>
    );
  },
});
