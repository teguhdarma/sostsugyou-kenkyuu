import { React, useState, useEffect, useMemo } from 'react';

const Goaltracker = () => {
  const [visible, setVisible] = useState(false);
  let goalarray = useMemo(() => {
    return [
      ['Be an Athlete', ['dance', 'run', 'jump']],
      ['Get good grades', ['read', 'study', 'attend classes']],
    ];
  }, []);

  const [goals, setGoals] = useState(goalarray);
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState('');
  const [getTasks, assignTasks] = useState([]);

  const createGoal = () => {
    setGoals([...goals, [text, getTasks]]);
    setText('');
    assignTasks([]);
  };
  const addTask = () => {
    assignTasks([...getTasks, tasks]);
    setTasks('');
  };

  const getCommands = () => {
    setVisible(!visible);
  };

  const setCommandGoal = (a) => {
    setText(a.value);
  };

  const createTask = (a) => {
    setTasks(a.value);
  };

  return (
    <div className="">
      <div className=" w-full flex items-center flex-col pt-3">
        <h1 className=" text-3xl font-medium">check list</h1>
      </div>
      <div className=" h-full relative flex w-full flex-col items-center pt-12">
        {/* goals display */}
        {goals &&
          goals.map((goal, index) => {
            return (
              <div className=" w-1/2 px-5 py-2 shadow-md mb-8" key={index}>
                <h1 className="text-2xl font-medium">
                  {goal[1].length > 0
                    ? goal[0]
                    : `Hurray, Goal ${goal[0]} Achieved`}
                </h1>
                <div className="">
                  {goal[1].map((task, index2) => {
                    return (
                      <div
                        className="flex items-center justify-between px-4 py-2"
                        key={index2}
                      >
                        <p className="text-xl font-medium">{task}</p>
                        <input
                          type="checkbox"
                          onChange={() => {
                            const newGoals = goal[1].filter((task) => {
                              return task !== goal[1][index2];
                            });
                            const array = goals;
                            array[index][1] = newGoals;
                            setGoals([...array]);
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
      {visible ? (
        // Add new task window
        <div className="absolute top-0 h-full w-full flex items-center justify-center backdrop-blur-md">
          <div className=" bg-white shadow-md py-3 px-5">
            <h2 className="font-bold">Create new Goal</h2>
            <input
              placeholder="Enter goals"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              className=" border-2 border-blue-600 w-5/6 my-4 px-2 py-2 rounded-md"
            />
            <p>Enter set of task to be accomplished to achieve set goal</p>
            <div className="flex gap-2 justify-center items-center">
              <input
                placeholder="Enter task"
                value={tasks}
                onChange={(e) => {
                  setTasks(e.target.value);
                }}
                className=" border-2 border-blue-600 w-5/6 my-4 px-2 py-2 rounded-md"
              />
              <button
                className=" px-6 py-2 text-white bg-blue-600 rounded-sm w-32"
                onClick={() => {
                  addTask();
                }}
              >
                Add task
              </button>
            </div>
            <button
              className=" px-6 py-2 text-white bg-blue-600 rounded-sm"
              onClick={() => {
                createGoal();
              }}
            >
              Create Goal
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Goaltracker;
