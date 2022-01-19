import create,{ SetState }  from "zustand";

type HomeStore = {
    fullArticle:boolean,
    setFullArticle:()=>void,
    resetHome:()=>void,
}
export const useHomeStore = create((set:SetState<HomeStore>) => ({
    fullArticle:false,
    setFullArticle:()=>set({fullArticle:true}),
    resetHome:()=>set({fullArticle:false}),
}));
