import { atom } from 'recoil'
import { IEvento } from '../interfaces/IEvento'
import { IFiltro } from '../interfaces/IFiltro'

export const listaDeEventosState = atom<IEvento[]>({
	key: 'listaDeEventosState',
	default: [
		{
			"descricao": "Estudar React",
			"inicio": new Date("2023-10-02T09:00"),
			"fim": new Date("2023-10-02T13:00"),
			"completo": false,
			"id": 1642342747
		},
		{
			"descricao": "Estudar Recoil",
			"inicio": new Date("2023-10-02T09:00"),
			"fim": new Date("2023-10-02T11:00"),
			"completo": false,
			"id": 1642342959
		}
	]
})

export const filtroDeEventos = atom<IFiltro>({
	key: 'filtro',
	default: {}
})