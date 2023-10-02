import React from 'react';
import { IEvento } from '../../../interfaces/IEvento';
import useAtualizarEvento from '../../../state/hooks/useAtualizarEvento';

const EventoCheckbox: React.FC<{ evento: IEvento }> = ({ evento }) => {

	const atualizaEvento = useAtualizarEvento();
	const estilos = [
		'far',
		'fa-2x',
		evento.completo ? 'fa-check-square' : 'fa-square'
	]

	function alterarStatus() {
		console.log('pene')
		const eventoAlterado = {
			...evento
		}

		eventoAlterado.completo = !eventoAlterado.completo;
		atualizaEvento(eventoAlterado)
	}

	return (<i className={estilos.join(' ')} onClick={alterarStatus}></i>)
}

export default EventoCheckbox