import { registerBlockType } from "@wordpress/blocks";
import { RichText } from "@wordpress/block-editor";

registerBlockType("bosi-backend-blocks/code", {
  title: "code",
  icon: "align-center",
  category: "common",
  attributes: {
    quote: {
      type: "string",
    },
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
    const onChangeQuote = (newQuote) => {
      setAttributes({ quote: newQuote });
    };
    return (
      <div className="nes-container is-rounded is-dark">
        <RichText
          placeholder="Add your quote here"
          tagName="p"
          onChange={onChangeQuote}
          value={quote}
        />
      </div>
    );
  },
  save: (props) => {
    return (
      <div className="nes-container is-rounded is-dark">
        <RichText.Content
          tagName="p"
          value={props.attributes.quote}
        />
      </div>
    );
  },
});
