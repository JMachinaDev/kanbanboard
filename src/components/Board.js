import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

// https://codesandbox.io/s/jovial-leakey-i0ex5?file=/src/App.js
// https://dev.to/bnevilleoneill/build-a-beautiful-draggable-kanban-board-with-react-beautiful-dnd-3oij

// import Home from './Home';

const itemsFromBackend = [
    { id: 1, content: "first task"},
    { id: 2, content: "second task"},
    { id: 3, content: "third task"},
    { id: 4, content: "fourth task"},
    { id: 5, content: "fifth task"},
    { id: 6, content: "sixth task"},
]



const Board = () => {
    const [columns, setColumns] = useState(columnsFromBackend);

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
            <DragDropContext
                onDragEnd={result => onDragEnd(result, columns, setColumns)}
            >
                {Object.entries(columns).map(([columnId, column], index) => {
                return (
                    <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                    key={columnId}
                    >
                    <h2>{column.name}</h2>
                    <div style={{ margin: 8 }}>
                        <Droppable droppableId={columnId} key={columnId}>
                        {(provided, snapshot) => {
                            return (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={{
                                background: snapshot.isDraggingOver
                                    ? "lightblue"
                                    : "lightgrey",
                                padding: 4,
                                width: 250,
                                minHeight: 500
                                }}
                            >
                                {column.items.map((item, index) => {
                                return (
                                    <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}
                                    >
                                    {(provided, snapshot) => {
                                        return (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={{
                                            userSelect: "none",
                                            padding: 16,
                                            margin: "0 0 8px 0",
                                            minHeight: "50px",
                                            backgroundColor: snapshot.isDragging
                                                ? "#263B4A"
                                                : "#456C86",
                                            color: "white",
                                            ...provided.draggableProps.style
                                            }}
                                        >
                                            {item.content}
                                        </div>
                                        );
                                    }}
                                    </Draggable>
                                );
                                })}
                                {provided.placeholder}
                            </div>
                            );
                        }}
                        </Droppable>
                    </div>
                    </div>
                );
                })}
            </DragDropContext>
            </div>
        </>

    );
}


export default Board; 