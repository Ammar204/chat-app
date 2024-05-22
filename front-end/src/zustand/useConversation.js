
import {create} from "zustand"

const useConversation = create((set)=>({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({selectedConversation}),
    messages:[],
    setMessages: (messages) => set({messages}),
    onlineFriends: [],
    setOnlineFriends: (onlineFriends) => set({onlineFriends})
}))

export default useConversation