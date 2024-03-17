"use client";
import { Chapter, Course, Unit } from "@prisma/client";
import React, { useEffect } from "react";
import { Button } from "./button";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "postcss";

type Props = {
  course: Course;
  chapter: Chapter;
  units: Unit & {
    chapters: Chapter[];
  };
  unitIndex: number;
  chapterIndex: number;
};
declare global {
  interface Window {
    updateStatus: (selectedTask: HTMLInputElement) => void;
  }
}

const PathCards = ({
  course,
  chapter,
  units,
  chapterIndex,
  unitIndex,
}: Props) => {
  useEffect(() => {
    console.log("running");
    // const dayTitle = document.querySelector<HTMLHeadingElement>("#dayName");

    // if (!dayTitle) {
    //   console.log(
    //     'idhar'
    //   )
    //   return; // Exit early if any required elements are not found
    // }

    // const lang = navigator.language;

    // const updateDayName = () => {
    //   const date = new Date();
    //   const dayName = date.toLocaleString(lang, {
    //     weekday: "long",
    //   });
    //   dayTitle.innerHTML = dayName;
    // };

    // updateDayName();
    // Set initial day name

    const taskInput =
      document.querySelector<HTMLInputElement>(".task-input input");
    const filters = document.querySelectorAll<HTMLSpanElement>(".filters span");
    const clearAll = document.querySelector<HTMLButtonElement>(".clear-btn");
    const taskBox = document.querySelector<HTMLUListElement>(".task-box");

    window.updateStatus = function (selectedTask: HTMLInputElement) {
      const todos: { name: string; status: string }[] | null = JSON.parse(
        localStorage.getItem("todo-list") || "[]"
      );

      if (!todos) {
        console.error("todos array is not initialized.");
        return;
      }

      let taskName = selectedTask.parentElement
        ?.lastElementChild as HTMLElement;
      const taskId = Number(selectedTask.id);
      const todo = todos[taskId];

      if (!todo) {
        console.error(`Todo with id ${taskId} not found.`);
        return;
      }

      if (selectedTask.checked) {
        taskName?.classList.add("checked");
        todo.status = "completed";
      } else {
        taskName?.classList.remove("checked");
        todo.status = "pending";
      }
      localStorage.setItem("todo-list", JSON.stringify(todos));
    };

    if (!taskInput || !clearAll || !taskBox) {
      console.error("Required elements not found.");
      return;
    }

    let editId: number | undefined,
      isEditTask = false,
      todos: { name: string; status: string }[] | null = JSON.parse(
        localStorage.getItem("todo-list") || "[]"
      );

    filters.forEach((btn) => {
      btn.addEventListener("click", () => {
        document
          .querySelector<HTMLSpanElement>("span.active")
          ?.classList.remove("active");
        btn.classList.add("active");
        showTodo(btn.id);
      });
    });

    showTodo("all");

    function showTodo(filter: string) {
      let liTag = "";
      if (todos) {
        todos.forEach((todo, id) => {
          let completed = todo.status == "completed" ? "checked" : "";
          if (filter == todo.status || filter == "all") {
            liTag += `<li class="task">
              <label for="${id}">
                  <input onclick="updateStatus(this)" type="checkbox" id="${id}" ${completed}>
                  <p class="${completed}">${todo.name}</p>
              </label>
              <div class="settings">
                  <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                  <ul class="task-menu">
                      <li onclick='editTask(${id}, "${todo.name}")'><i class="uil uil-pen"></i>Edit</li>
                      <li onclick='deleteTask(${id}, "${filter}")'><i class="uil uil-trash"></i>Delete</li>
                  </ul>
              </div>
            </li>`;
          }
        });
      }

      if (taskBox) {
        taskBox.innerHTML =
          liTag || `<span>You don't have any task here</span>`;

        let checkTask = taskBox.querySelectorAll(".task");
        !checkTask.length
          ? clearAll?.classList.remove("active")
          : clearAll?.classList.add("active");

        if (taskBox.offsetHeight !== undefined) {
          taskBox.offsetHeight >= 300
            ? taskBox.classList.add("overflow")
            : taskBox.classList.remove("overflow");
        }
      }
    }

    // function showMenu(selectedTask: HTMLElement) {
    //   let menuDiv = selectedTask.parentElement?.lastElementChild as HTMLElement;
    //   menuDiv?.classList.add("show");
    //   document.addEventListener("click", (e) => {
    //     if (
    //       e.target instanceof HTMLElement &&
    //       e.target.tagName != "I" &&
    //       e.target != selectedTask
    //     ) {
    //       menuDiv?.classList.remove("show");
    //     }
    //   });
    // }

    function updateStatus(selectedTask: HTMLInputElement) {
      let taskName = selectedTask.parentElement
        ?.lastElementChild as HTMLElement;
      if (selectedTask.checked) {
        taskName?.classList.add("checked");
        todos![Number(selectedTask.id)].status = "completed";
      } else {
        taskName?.classList.remove("checked");
        todos![Number(selectedTask.id)].status = "pending";
      }
      localStorage.setItem("todo-list", JSON.stringify(todos));
    }

    // function editTask(taskId: number, textName: string) {
    //   editId = taskId;
    //   isEditTask = true;
    //   taskInput!.value = textName;
    //   taskInput!.focus();
    //   taskInput!.classList.add("active");
    // }

    // function deleteTask(deleteId: number, filter: string) {
    //   isEditTask = false;
    //   todos!.splice(deleteId, 1);
    //   localStorage.setItem("todo-list", JSON.stringify(todos));
    //   showTodo(filter);
    // }

    clearAll?.addEventListener("click", () => {
      isEditTask = false;
      todos!.splice(0, todos!.length);
      localStorage.setItem("todo-list", JSON.stringify(todos));
      showTodo("");
    });

    taskInput?.addEventListener("keyup", (e) => {
      let userTask = taskInput!.value.trim();
      if (e.key == "Enter" && userTask) {
        if (!isEditTask) {
          todos = !todos ? [] : todos;
          let taskInfo = { name: userTask, status: "pending" };
          todos.push(taskInfo);
        } else {
          isEditTask = false;
          todos![editId!].name = userTask;
        }
        taskInput!.value = "";
        localStorage.setItem("todo-list", JSON.stringify(todos));
        showTodo(document.querySelector("span.active")!.id);
      }
    });

    // Call showMenu function
    // const sampleTask = document.querySelector(".task") as HTMLElement;
    // showMenu(sampleTask);

    // Call updateTask function
    const sampleInput =
      document.querySelector<HTMLInputElement>("#sampleInput");
    if (sampleInput) {
      updateStatus(sampleInput);
    }
  }, []);

  const nextchapter = units.chapters[chapterIndex + 1];
  const prevchapter = units.chapters[chapterIndex - 1];
  return (
    <div className="flex-[1] mt-16 ml-8">
      <div className="todoList  ">
        <div className="cover-img">
          <div className="cover-inner">
            <h3 id="dayName "></h3>
          </div>
        </div>
        <div className="wrapper ">
          <div className="task-input ">
            <input type="text" placeholder="Add a New Task + Enter" />
          </div>
          <div className="controls">
            <div className="filters">
              <span className="active " id="all">
                All
              </span>
            </div>
            <button className="clear-btn">Clear All</button>
          </div>
          <ul className="task-box text-red-100"></ul>
        </div>
      </div>
      <div className="flex-col pb-3 items-center justify-between  w-fit h-auto ">
        {prevchapter && (
          <Link
            href={`/course/${course.id}/${unitIndex}/${chapterIndex - 1}`}
            className=" flex mt-4  "
          >
            <div className="flex items-center  w-fit ">
              <div className="flex flex-col items-start ">
                <span className="text-sm text-blue-500">Previous</span>
                <span className="text-xl font-bold ">{prevchapter.name}</span>
              </div>
            </div>
          </Link>
        )}

        {nextchapter && (
          <Link
            href={`/course/${course.id}/${unitIndex}/${chapterIndex + 1}`}
            className=" flex mt-4  "
          >
            <div className="flex items-center w-fit  ">
              <div className="flex flex-col items-start">
                <span className="text-sm text-blue-500">Next</span>
                <span className="text-xl font-bold ">{nextchapter.name}</span>
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PathCards;
