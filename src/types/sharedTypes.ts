import React from "react";

export interface Address {
    address: string;
    zip: string;
    city: string;
}

export interface Me {
    name: string;
    age: number;
    email: string;
    companyName: string;
    address: Address;
}

export interface Item {
    icon: React.ElementType;
    title: string;
    description: string;
    category?: string;
}

export interface SectionLabels {
    hero: string;
    about: string;
    skills: string;
    offer: string;
    contact: string;
}

export const sections: (keyof SectionLabels)[] = [
    "hero",
    "about",
    "skills",
    "offer",
    "contact",
];

export type SectionKey = keyof SectionLabels;

export interface InfoData {
    label: string;
    value: string;
}

export interface Sections {
    id: string;
    component: React.ReactNode;
}

export interface MessageState {
    title: string;
    description: string;
}

export interface StatusMessages {
    loading: MessageState;
    success: MessageState;
    error: MessageState;
}