import { useSetRecoilState } from "recoil"
import { listaDeEventosState } from "../atom"
import { IEvento } from "../../interfaces/IEvento";
import { obterId } from "../../util";

export default function useAdicionarEvento() {
	const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
	return (evento: IEvento) => {
		const hoje = new Date();
		if (evento.inicio < hoje) throw new Error("Não é possível cadastrar eventos com datas anteriores a atual.")
		evento.id = obterId()
		return setListaDeEventos(listaAntiga => [...listaAntiga, evento])
	}
}