import React, { useState, useEffect } from 'react';
import HeaderPlataforma from '../../components/Header/Plataforma/HeaderPlataforma';
import FooterPlataforma from '../../components/Footer/FooterPlataforma/FooterPlataforma';
import { Link } from 'react-router-dom';
import { useUsuario } from '../../hooks/Usuario';
import './MinhasNegociacoes.css';
import LinhaContato from './LinhaContato/LinhaContato';
import Select from 'react-select';

const MinhasNegociacoes = () => {
    const { usuario } = useUsuario();
    const [interacoes, setInteracoes] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [negociacaoIndex, setNegociacaoIndex] = useState(null);
    const [newStatus, setNewStatus] = useState('');

    useEffect(() => {
        const interacoesJSON = JSON.parse(sessionStorage.getItem('interacoesPrestadora') || '[]');
        setInteracoes(interacoesJSON);
    }, []);

    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === 'interacoesPrestadora') {
                const interacoesJSON = JSON.parse(event.newValue);
                setInteracoes(interacoesJSON);
            }
        };
    
        window.addEventListener('storage', handleStorageChange);
    
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const handleOpenModal = (index) => {
        setNegociacaoIndex(index);
        setNewStatus(interacoes[index].status);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setNegociacaoIndex(null);
        setNewStatus('');
    };

    const handleSaveStatus = () => {
        const updatedInteracoes = [...interacoes];
        updatedInteracoes[negociacaoIndex].status = newStatus;
        setInteracoes(updatedInteracoes);
        sessionStorage.setItem('interacoesPrestadora', JSON.stringify(updatedInteracoes));
        handleCloseModal();
    };

    const statusOptions = [
        { value: 'Pendente', label: 'Pendente' },
        { value: 'Em andamento', label: 'Em andamento' },
        { value: 'Finalizada', label: 'Finalizada' }
    ];

    const customStyles = {
        control: (provided) => ({
            ...provided,
            borderColor: 'var(--cor-primaria)',
            '&:hover': { borderColor: 'var(--cor-secundaria)' },
            boxShadow: 'none'
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? 'var(--cinza)' : 'white',
            color: state.isSelected ? 'white' : 'black',
            '&:hover': { backgroundColor: 'var(--cor-secundaria)', color: 'white' }
        }),
        singleValue: (provided) => ({
            ...provided,
            color: 'var(--cor-secundaria)'
        }),
        menu: (provided) => ({
            ...provided,
            borderRadius: '0 0 5px 5px',
            overflow: 'hidden',
            zIndex: 2
        }),
        menuList: (provided) => ({
            ...provided,
            padding: 0
        })
    };
    return (
        <div>
            <HeaderPlataforma
                plano={usuario.plano}
                razaoSocial={usuario.razaoSocial}
            />

            <div className="conteudo">
                <div className='beadcrumb'>
                    <Link className='link-beadcrumb-atual'>
                        <span>Minhas Negociações </span>
                    </Link>
                </div>

                <div className="container-minhas-negociacoes">
                    <h2 className='titulo-pagina'>Status das Negociações</h2>
                    <div className='tracinho-divisor'></div>

                    <div className='container-status-negociacoes'>
                        <div className='status'>
                            <input type="radio" name="status" id="pendente" className='input-status' />
                            <label htmlFor="pendente">Pendente</label>
                        </div>

                        <div className='status'>
                            <input type="radio" name="status" id="andamento" className='input-status' />
                            <label htmlFor="andamento">Em andamento</label>
                        </div>

                        <div className='status'>
                            <input type="radio" name="status" id="finalizada" className='input-status' />
                            <label htmlFor="finalizada">Finalizada</label>
                        </div>
                    </div>

                    <div className='tracinho-divisor'></div>

                    <div className='container-negociacoes'>
                        <h2 className='titulo-controle-negociacoes'>Controle de Negociações</h2>
                        <div className='tracinho-divisor'></div>

                        <div className='titulos-tabela-negociacao'>
                            <div className='titulo-nome-empresa'>
                                Nome da Empresa
                            </div>

                            <div className='titulo-nome-servico'>
                                Serviço
                            </div>

                            <div className='titulo-contato'>
                                Data de contato
                            </div>

                            <div className='titulo-status-atual'>
                                Status Atual
                            </div>

                            <div className='titulo-final'>
                            </div>
                        </div>

                        <div className='tracinho-divisor-negociacoes'></div>

                        {interacoes.length > 0 ? (
                            interacoes.map((interacao, index) => (
                                <div key={index}>
                                    <LinhaContato
                                        nomeEmpresa={interacao.nomeEmpresa}
                                        nomeServico={interacao.nomeServico}
                                        dataContato={interacao.data}
                                        statusAtual={interacao.status}
                                        onEdit={() => handleOpenModal(index)}
                                    />
                                </div>
                            ))
                        ) : (
                            <p className='vazio-negocios'>Não há Negociações</p>
                        )}
                    </div>
                </div>
            </div>
            {showModal && negociacaoIndex !== null && (
                <div className="modal-negociacao">
                    <div className="modal-negociacao-content">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <h2>Editar Status</h2>
                        <p>Empresa: {interacoes[negociacaoIndex].nomeEmpresa}</p>
                        <p>Serviço: {interacoes[negociacaoIndex].nomeServico}</p>
                        <p>Data de Contato: {interacoes[negociacaoIndex].data}</p>
                        <Select 
                            options={statusOptions}
                            value={statusOptions.find(option => option.value === newStatus)}
                            onChange={(option) => setNewStatus(option.value)}
                            styles={customStyles}

                        />
                        <div className="modal-buttons">
                        <button className='botao-borda' onClick={() => handleCloseModal()}>Cancelar</button>

                            <button className='botao-preenchido' onClick={() => handleSaveStatus()}>Confirmar</button>


                        </div>
                    </div>
                </div>
            )}
            <FooterPlataforma />
        </div>
    );
};

export default MinhasNegociacoes;
