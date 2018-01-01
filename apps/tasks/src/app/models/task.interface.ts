export const UrgencyMap: Object[] = [{code: 'warn', name: "Срочно"}, {code: 'accent', name: "Нормально"}, {code: 'primary', name:"Не срочно"}]

export const enum Urgency {
    Hi,
    Middle,
    Low
}

export interface Task { 
    id: Number,
    name: String
    description: String
    status: Boolean
    urgency: Urgency
    finishTo: Date   
}

export interface FilteredTasks { 
    completed: Task[]
    uncompleted: Task[]
}

export interface Statistics {
    all: number
    completed: number
    uncompleted: number
    urgent: number
}