import React from "react";
import { useDataContext } from "../providers/dataContextProvider";
import { NewExercise } from "../components/NewExercise";
import { Login } from "../components/Login";

export default function IndexPage() {
  const { exercises } = useDataContext();

  return (
    <div>
      <Login />
      <h1>Next up: 23</h1>
      <NewExercise />
      <h2>Previous exercises</h2>
      {exercises.map((exercise) => (
        <div key={exercise.id}>
          {exercise.rep} - {exercise.createdAt.seconds}
        </div>
      ))}
      <a href="#">Check your history</a>
    </div>
  );
}
