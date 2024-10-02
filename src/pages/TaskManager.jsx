import { useState } from "react";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState("");
  const [ticked, setTicked] = useState(false);

  function handleClick() {
    if (inputText == "") return;

    if (tasks.indexOf(inputText.trim()) != -1) return;

    setTasks((prev) => {
      let newTasks = [...prev];
      newTasks.push({ text: inputText.trim(), completed: false });
      return newTasks;
    });

    setInputText("");
  }

  function handleDelete(task) {
    setTasks((prev) => {
      let newPrev = [];
      prev.forEach((e) => {
        if (e.text != task.text) {
          newPrev.push(e);
        }
      });

      return newPrev;
    });
  }

  function handleCompleted(task) {
    setTasks((prev) => {
      let newPrev = [];
      prev.forEach((e) => {
        if (e.text != task.text) {
          newPrev.push(e);
        } else {
          newPrev.push({ ...e, completed: !e.completed });
        }
      });

      return newPrev;
    });
  }

  return (
    <div className="w-screen h-full flex justify-center items-center">
      <div className="mt-20 flex flex-col gap-10 border border-white shadow-lg min-h-[500px] min-w-[500px] p-5 rounded-3xl">
        <div className="flex gap-5">
          <input
            type="text"
            className="text-black p-2 w-[90%] rounded-2xl"
            placeholder="Enter the task"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button onClick={handleClick}>OK</button>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex w-full justify-between border-b border-b-white pb-2">
            <h1>Your Tasks</h1>
            <div className="flex gap-2">
              <input
                type="checkbox"
                checked={ticked}
                onClick={() => setTicked((prev) => !prev)}
              />
              <label>Incomplete Tasks</label>
            </div>
          </div>
          {tasks.map((task, index) => (
            <div key={index}>
              {ticked ? (
                (!task.completed) ? (
                  <div className="w-full flex gap-3 h-[50px] justify-between items-center bg-slate-400 p-2 rounded-lg">
                    <p className={`${task.completed ? "line-through" : ""}`}>
                      {task.text}
                    </p>
                    <div className="flex gap-2">
                      <button
                        className="text-black p-2 rounded-full text-2xl"
                        onClick={() => handleDelete(task)}
                      >
                        ✖
                      </button>
                      <button
                        className="w-10 text-black p-2 rounded-full text-2xl"
                        onClick={() => handleCompleted(task)}
                      >
                        {task.completed ? "☑" : "☐"}
                      </button>
                    </div>
                  </div>
                ) : null
              ) : (
                <div className="w-full flex gap-3 h-[50px] justify-between items-center bg-slate-400 p-2 rounded-lg">
                  <p className={`${task.completed ? "line-through" : ""}`}>
                    {task.text}
                  </p>
                  <div className="flex gap-2">
                    <button
                      className="text-black p-2 rounded-full text-2xl"
                      onClick={() => handleDelete(task)}
                    >
                      ✖
                    </button>
                    <button
                      className="w-10 text-black p-2 rounded-full text-2xl"
                      onClick={() => handleCompleted(task)}
                    >
                      {task.completed ? "☑" : "☐"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
