export type Task = {
  taskName: string,
  taskId: number,
  done: boolean
};

export async function checkTask(taskId: Number | undefined) {
  if (taskId != undefined) {
    alert("penis");
    console.log("penis");
  }
}

export async function deleteTask(taskId: Number | undefined) {
  if (taskId != undefined) {
    alert("penis");
    console.log("penis");
  }
}

export async function getTasks(): Promise<Task[]> {
  let vec = [{
    taskName: "test",
    taskId: 1,
    done: true
  },
  {
    taskName: "test2",
    taskId: 2,
    done: false
  },
  {
    taskName: "test2",
    taskId: 2,
    done: false
  },
  {
    taskName: "test2",
    taskId: 2,
    done: false
  },
  {
    taskName: "test2",
    taskId: 2,
    done: false
  },
  {
    taskName: "test2",
    taskId: 2,
    done: false
  },
  {
    taskName: "test2",
    taskId: 2,
    done: false
  },
  {
    taskName: "test2",
    taskId: 2,
    done: false
  },
  {
    taskName: "test2",
    taskId: 2,
    done: false
  },
  {
    taskName: "test2",
    taskId: 2,
    done: false
  },
  {
    taskName: "test2",
    taskId: 2,
    done: false
  },
  {
    taskName: "test2",
    taskId: 2,
    done: false
  },
  ];
  return vec;
}
