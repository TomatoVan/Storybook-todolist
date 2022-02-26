import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Task from "../state/Task";
import {ReduxStoreProviderDecorator} from "../state/ReduxStoreProviderDecorator";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TODOLIST/Task',
  component: Task,
	decorators:[ReduxStoreProviderDecorator],

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Task>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Task> = (args) => <Task {...args}/>;

export const TaskStory = Template.bind({});
TaskStory.args = {
	taskId: '11',
	todolistId: "todolistId1",
};


