import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const getInitialTasks = () => {
    const allTasks = localStorage.getItem('tasks')
    if(allTasks) {
       return JSON.parse(allTasks)
    }
}

const initialState = {
    tasks: getInitialTasks(),
    isLoading: true
}


const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask(state, action) {
            const addedTask = {...action.payload, status: 'Incomplete'}
           state.tasks.push(addedTask)
           localStorage.setItem("tasks", JSON.stringify(state.tasks))
           toast.success('Task added succesfully')
        },
        deleteTask(state, action) {
            const deletedTask = state.tasks.filter(activity => activity.task !== action.payload.task)
            state.tasks = deletedTask
            localStorage.setItem("tasks", JSON.stringify(state.tasks))
            toast.error('Task deleted succesfully')


        },
        filterCompletedTask(state, action) {
            const completedTask = state.tasks.findIndex(activity => activity.task === action.payload.value)
            state.tasks[completedTask].status = action.payload.currentStatus

            // const incompleteTask = state.tasks.filter(activity => activity.task !== action.payload.value)
            // state.tasks = incompleteTask
            localStorage.setItem("tasks", JSON.stringify(state.tasks))
            

        },
        
        sendTaskEmail(state, action) {
            // const transport = nodemailer.createTransport({
            //     host: "sandbox.smtp.mailtrap.io",
            //     port: 2525,
            //     auth: {
            //       user: "5f409200cfdbf4",
            //       pass: "2ba2a0f7466164"
            //     }
            //   });

            //   const info = transport.sendMail({
            //     from: 'prayjonas27@gmail.com',
            //     to: `${action.payload.email}`,
            //     subject: `Lets share the task`,
            //     text: `${action.payload.task} is the task i want to share with you`
            //   })
            //   console.log(info.messageId)
        }
    }
})

console.log(taskSlice)

export const { addTask, deleteTask, sendTaskEmail, filterCompletedTask } = taskSlice.actions

export default taskSlice.reducer