import React, { useState } from 'react';
import style from './App.module.scss';
import Card from './components/Card';
import Formulario from './components/Formulario';
import Calendario from './components/Calendario';
import ListaDeEventos from './components/ListaDeEventos';
import { RecoilRoot } from 'recoil';

function App() {

	const [filtro, setFiltro] = useState<Date | null>()

	const aplicarFiltro = (data: Date | null) => {
		setFiltro(data)
	}

	return (
		<RecoilRoot>
			<div className={style.App}>
				<div className={style.Coluna}>
					<Card>
						<Formulario />
					</Card>
					<hr />
					<Card>
						<ListaDeEventos />
					</Card>
				</div>
				<div className={style.Coluna}>
					<Calendario />
				</div>
			</div>
		</RecoilRoot>
	);
}

export default App;
