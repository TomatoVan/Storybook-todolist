import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import EditableSpan from "../components/EditableSpan";
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TODOLIST/EditableSpan',
  component: EditableSpan,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
	  titleFromProps: {
		defaultValue: 'defaultValue',
		description: 'string'

	  },
	  changeTask: {
		  description: 'Value EditableSpan changed'
	  }
  },
	args: {
		changeTask: action('Value EditableSpan changed')
	}
} as ComponentMeta<typeof EditableSpan>;

const Template: ComponentStory<typeof EditableSpan> = (args) => <EditableSpan {...args} />;

export const EditableSpanWithStartValueStory = Template.bind({});
EditableSpanWithStartValueStory.args = {

};

export const EditableSpanWithOutStartValueStory = Template.bind({});
EditableSpanWithOutStartValueStory.args = {
	titleFromProps: '123'
};

