import { ReactNode } from "react"

export interface IFoods {
    id: string;
    name: string;
    description: string;
    price: string;
    available: boolean;
    image: string
}

export interface FoodProps {
    key: string,
    food: IFoods,
    handleDelete: (id: string) => void,
    handleEditFood: (food: IFoods) => void,
}

export interface HeaderProps {
    openModal: () => void
}

export interface ModalProps {
    isOpen: boolean,
    children: ReactNode,
    setIsOpen: () =>  void,
}

export interface ModalAddFoodProps {
    isOpen: boolean,
    setIsOpen: () => void,
    handleAddFood: (food: IFoods) => void,
}

export interface ModalEditFoodProps {
    isOpen: boolean;
    setIsOpen: () => void;
    editingFood: IFoods;
    handleUpdateFood: (food:IFoods) => void;
}