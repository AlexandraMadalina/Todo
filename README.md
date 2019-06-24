## Todo

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a class exercise created by our coaches [Thijs Lambert](https://github.com/Thijs-Lambert) and [Kevin](https://github.com/keloriane)

I followed this exercises during my training as JuniorWeb Developer at BeCode in jun 2019.

### Objectives

- Introduction to REACT
- Getting familiar to React concepts 
- Create a React component
- Understanding `props` and `state` and how to interact between components
- Deploy a REACT App

### Description

In the Todo app you can create a list of tasks you have to do. When you completed a task you can check the box to cross it or you can click the red button to delete it, or you can delete multiple tasks at once.

### My approach

In App.js I created the main component, App. This component renders 4 other components.

The first component, Header, represent the header of the app. 

The second component, Form, created an array of objects which represent the user inputs, and updates the state of App. For every object the Todos components will create a TodoItem component. TodoItem creates a check box, the user's task and a delete button. The check box changes the completed property of that object witch will change the textDecoration property, and the task will be crossed. The button binds the id of the object and changes the state of the main component by fitering all the objects that do not have this id.

The last component, is a button wich filter all the objects that have not changed the completed propery.

### Results

You can see the results [here](https://alexandramadalina.github.io/Todo/)