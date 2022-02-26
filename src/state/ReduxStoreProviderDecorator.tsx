import React from 'react';
import {Provider} from "react-redux";
import {AppRootState, store} from "./store";
import {combineReducers, createStore} from "redux";
import {todolistsReducer} from "./todolistsReducer";
import {tasksReducer} from "./tasksReducer";
import {v1} from "uuid";


const rootReducer = combineReducers({
	todolists:todolistsReducer,
	tasks:tasksReducer
})

const initialGlobalState = {
	todolists: [
		{id: "todolistId1", title: "What to learn", filter: "all"},
		{id: "todolistId2", title: "What to buy", filter: "all"}
	] ,
	tasks: {
		"todolistId1": [
			{id: '11', title: "HTML&CSS", isDone: true},
			{id: v1(), title: "JS", isDone: true}
		],
		"todolistId2": [
			{id: v1(), title: "Milk", isDone: true},
			{id: v1(), title: "React Book", isDone: true}
		]
	}
};

export const storyBookStore = createStore(rootReducer, initialGlobalState as AppRootState);


export const ReduxStoreProviderDecorator = (storyFn: () => React.ReactNode) => { //HOC
	return <Provider store={storyBookStore}>{storyFn()}</Provider>
}