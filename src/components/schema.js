import { defineMessages } from "react-intl";
import config from "@plone/volto/registry";
import { mergeSchemas } from "../helpers";
import { v4 as uuid } from "uuid";

const messages = defineMessages({
  Slider: {
    id: "Slider",
    defaultMessage: "Slider",
  },
  testimonial: {
    id: "Testimonial",
    defaultMessage: "Testimonial",
  },
  image: {
    id: "Image",
    defaultMessage: "Image",
  },
  name: {
    id: "Name",
    defaultMessage: "Name",
  },
  additionalData: {
    id: "Additional data",
    defaultMessage: "Additional data",
  },
  item: {
    id: "Item",
    defaultMessage: "Item",
  },
  items: {
    id: "Items",
    defaultMessage: "Items",
  },
  addItem: {
    id: "Add item",
    defaultMessage: "Add item",
  },
});

export const itemSchema = (props) =>
  mergeSchemas(
    {
      title: props.intl.formatMessage(messages.item),
      addMessage: props.intl.formatMessage(messages.addItem),
      fieldsets: [
        {
          id: "default",
          title: "Default",
          fields: ["testimonial", "image", "name", "additionalData"],
        },
      ],

      properties: {
        testimonial: {
          title: props.intl.formatMessage(messages.testimonial),
          widget: "textarea",
        },
        image: {
          title: props.intl.formatMessage(messages.image),
          widget: "object_browser",
          mode: "image",
          allowExternals: true,
        },
        name: {
          title: props.intl.formatMessage(messages.name),
        },
        additionalData: {
          title: props.intl.formatMessage(messages.additionalData),
        },
      },
      required: [],
    },
    config.blocks.blocksConfig.slider.extensions?.slideSchema || {}
  );

export const SliderSchema = (props) =>
  mergeSchemas(
    {
      title: props.intl.formatMessage(messages.Slider),
      block: "slider",
      fieldsets: [
        {
          id: "default",
          title: "Default",
          fields: ["slides"],
        },
      ],
      properties: {
        slides: {
          widget: "object_list",
          title: props.intl.formatMessage(messages.items),
          schema: itemSchema(props),
          activeObject: props.activeObject,
          setActiveObject: props.setActiveObject,
          default: [{ "@id": uuid() }],
        },
      },
      required: [],
    },
    config.blocks.blocksConfig.slider.extensions?.blockSchema || {}
  );
