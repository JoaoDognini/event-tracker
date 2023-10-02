import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaDeEventosState } from "../atom";

export default function useExcluirEvento() {
	const setListaDeEventos = useSetRecoilState(listaDeEventosState);
	return (evento: IEvento) => {
		setListaDeEventos(listaAntiga => listaAntiga.filter(eventos => eventos.id !== evento.id))
	}
}