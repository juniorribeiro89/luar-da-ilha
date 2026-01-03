// ===== BANCO DE DADOS DA GALERIA =====
const galeriaDB = {
    itens: [
        // FOTOS - Apresentações 2023
        {
            id: 1,
            tipo: 'foto',
            titulo: 'Abertura Solene 2023',
            descricao: 'Momento inicial da nossa apresentação na Festa Junina Municipal. Mais de 500 pessoas na plateia.',
            url: 'https://images.unsplash.com/photo-1596900779744-2bdc4a89d54e?w=1200&auto=format&fit=crop',
            data: '23/06/2023',
            visualizacoes: 245,
            tamanho: '2.4 MB',
            categorias: ['fotos', 'apresentacoes'],
            album: 'apresentacoes2023',
            favorito: false
        },
        {
            id: 2,
            tipo: 'foto',
            titulo: 'Formação em Linha',
            descricao: 'Alinhamento perfeito dos dançarinos durante a coreografia principal.',
            url: 'https://images.unsplash.com/photo-1596803244663-4d80d08ef80e?w=1200&auto=format&fit=crop',
            data: '23/06/2023',
            visualizacoes: 189,
            tamanho: '3.1 MB',
            categorias: ['fotos', 'apresentacoes'],
            album: 'apresentacoes2023',
            favorito: true
        },
        {
            id: 3,
            tipo: 'foto',
            titulo: 'Casamento na Roça',
            descricao: 'Cena tradicional do casamento caipira, uma das mais aguardadas.',
            url: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=1200&auto=format&fit=crop',
            data: '23/06/2023',
            visualizacoes: 312,
            tamanho: '2.8 MB',
            categorias: ['fotos', 'apresentacoes'],
            album: 'apresentacoes2023',
            favorito: false
        },
        {
            id: 4,
            tipo: 'foto',
            titulo: 'Fogueira de São João',
            descricao: 'Momento mágico ao redor da fogueira tradicional.',
            url: 'https://images.unsplash.com/photo-1547825407-12d434919a71?w=1200&auto=format&fit=crop',
            data: '23/06/2023',
            visualizacoes: 278,
            tamanho: '3.5 MB',
            categorias: ['fotos', 'apresentacoes'],
            album: 'apresentacoes2023',
            favorito: true
        },
        {
            id: 5,
            tipo: 'foto',
            titulo: 'Coreografia Final',
            descricao: 'Última formação da apresentação, recebendo aplausos.',
            url: 'https://images.unsplash.com/photo-1560523160-754a9bcb6fbf?w=1200&auto=format&fit=crop',
            data: '23/06/2023',
            visualizacoes: 195,
            tamanho: '2.9 MB',
            categorias: ['fotos', 'apresentacoes'],
            album: 'apresentacoes2023',
            favorito: false
        },

        // FOTOS - Ensaios 2024
        {
            id: 6,
            tipo: 'foto',
            titulo: 'Primeiro Ensaio 2024',
            descricao: 'Início dos trabalhos para a temporada junina deste ano.',
            url: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=1200&auto=format&fit=crop',
            data: '10/03/2024',
            visualizacoes: 156,
            tamanho: '3.2 MB',
            categorias: ['fotos', 'ensaios'],
            album: 'ensaios2024',
            favorito: false
        },
        {
            id: 7,
            tipo: 'foto',
            titulo: 'Alongamento Coletivo',
            descricao: 'Preparação física antes do ensaio técnico.',
            url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&auto=format&fit=crop',
            data: '15/03/2024',
            visualizacoes: 134,
            tamanho: '2.7 MB',
            categorias: ['fotos', 'ensaios'],
            album: 'ensaios2024',
            favorito: true
        },
        {
            id: 8,
            tipo: 'foto',
            titulo: 'Correção de Passos',
            descricao: 'Coreógrafa orientando os dançarinos.',
            url: 'https://images.unsplash.com/photo-1527271981479-42d4b5f3e5c5?w=1200&auto=format&fit=crop',
            data: '22/03/2024',
            visualizacoes: 178,
            tamanho: '3.4 MB',
            categorias: ['fotos', 'ensaios'],
            album: 'ensaios2024',
            favorito: false
        },
        {
            id: 9,
            tipo: 'foto',
            titulo: 'Ensaio Noturno',
            descricao: 'Preparação sob as luzes do centro comunitário.',
            url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format&fit=crop',
            data: '05/04/2024',
            visualizacoes: 145,
            tamanho: '4.1 MB',
            categorias: ['fotos', 'ensaios'],
            album: 'ensaios2024',
            favorito: true
        },
        {
            id: 10,
            tipo: 'foto',
            titulo: 'Ensaio com Figurino',
            descricao: 'Primeira vez com os trajes completos.',
            url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&auto=format&fit=crop',
            data: '12/04/2024',
            visualizacoes: 189,
            tamanho: '3.8 MB',
            categorias: ['fotos', 'ensaios'],
            album: 'ensaios2024',
            favorito: false
        },

        // VÍDEOS
        {
            id: 11,
            tipo: 'video',
            titulo: 'Documentário Completo 2023',
            descricao: 'Registro completo da nossa apresentação principal.',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Vídeo exemplo
            thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&auto=format&fit=crop',
            data: '30/06/2023',
            visualizacoes: 1250,
            duracao: '5:23',
            categorias: ['videos', 'apresentacoes'],
            favorito: true
        },
        {
            id: 12,
            tipo: 'video',
            titulo: 'Making Of - Ensaios 2024',
            descricao: 'Bastidores da preparação para a temporada.',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            thumbnail: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&auto=format&fit=crop',
            data: '22/03/2024',
            visualizacoes: 876,
            duracao: '3:45',
            categorias: ['videos', 'ensaios', 'bastidores'],
            favorito: false
        },
        {
            id: 13,
            tipo: 'video',
            titulo: 'Entrevista com Dançarinos',
            descricao: 'Conversa com nossos integrantes sobre a paixão pela quadrilha.',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            thumbnail: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&auto=format&fit=crop',
            data: '15/07/2023',
            visualizacoes: 542,
            duracao: '8:12',
            categorias: ['videos', 'bastidores'],
            favorito: true
        }
    ],

    albuns: {
        apresentacoes2023: {
            titulo: 'Apresentações 2023',
            descricao: 'Melhores momentos dos festejos juninos',
            capa: 'https://images.unsplash.com/photo-1596900779744-2bdc4a89d54e?w=1200&auto=format&fit=crop',
            data: 'Junho 2023',
            totalFotos: 10,
            visualizacoes: 2450
        },
        ensaios2024: {
            titulo: 'Ensaios 2024',
            descricao: 'Preparação para a temporada junina',
            capa: 'https://images.unsplash.com/photo-1596803244663-4d80d08ef80e?w=1200&auto=format&fit=crop',
            data: 'Março-Abril 2024',
            totalFotos: 10,
            visualizacoes: 1890
        }
    }
};

// ===== VARIÁVEIS GLOBAIS =====
let filtroAtual = 'todos';
let itensVisiveis = 12;
let itemAtualModal = null;
let itensFiltrados = [];

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
    inicializarGaleria();
    configurarFiltros();
    configurarModal();
    atualizarEstatisticas();
});

// ===== INICIALIZAR GALERIA =====
function inicializarGaleria() {
    itensFiltrados = galeriaDB.itens;
    renderizarGaleria();
    atualizarContador();
}

// ===== RENDERIZAR GALERIA =====
function renderizarGaleria() {
    const container = document.getElementById('galeria-grid');
    if (!container) return;

    container.innerHTML = '';
    
    const itensParaMostrar = itensFiltrados.slice(0, itensVisiveis);
    
    itensParaMostrar.forEach(item => {
        const itemElement = criarItemGaleria(item);
        container.appendChild(itemElement);
    });
    
    // Mostrar/ocultar botão "Carregar Mais"
    const btnCarregarMais = document.getElementById('carregar-mais');
    if (btnCarregarMais) {
        btnCarregarMais.style.display = itensVisiveis < itensFiltrados.length ? 'block' : 'none';
    }
}

// ===== CRIAR ITEM DA GALERIA =====
function criarItemGaleria(item) {
    const div = document.createElement('div');
    div.className = `galeria-item ${item.tipo}`;
    div.setAttribute('data-id', item.id);
    div.setAttribute('data-categoria', item.categorias.join(' '));
    
    if (item.tipo === 'video') {
        div.innerHTML = `
            <div class="item-thumbnail">
                <div class="video-indicator">
                    <i class="fas fa-play-circle"></i>
                </div>
                <img src="${item.thumbnail}" alt="${item.titulo}" loading="lazy">
                <div class="item-overlay">
                    <div class="item-info">
                        <span class="item-tipo video"><i class="fas fa-video"></i> VÍDEO</span>
                        <h4>${item.titulo}</h4>
                        <p>${item.duracao}</p>
                    </div>
                    <div class="item-acoes">
                        <button class="btn-assistir" title="Assistir">
                            <i class="fas fa-play"></i>
                        </button>
                        ${item.favorito ? 
                            '<button class="btn-favorito ativo" title="Remover dos favoritos"><i class="fas fa-heart"></i></button>' : 
                            '<button class="btn-favorito" title="Adicionar aos favoritos"><i class="far fa-heart"></i></button>'
                        }
                    </div>
                </div>
            </div>
            <div class="item-metadata">
                <span class="item-data"><i class="far fa-calendar"></i> ${item.data}</span>
                <span class="item-views"><i class="far fa-eye"></i> ${item.visualizacoes.toLocaleString('pt-BR')}</span>
            </div>
        `;
    } else {
        div.innerHTML = `
            <div class="item-thumbnail">
                <img src="${item.url}" alt="${item.titulo}" loading="lazy">
                <div class="item-overlay">
                    <div class="item-info">
                        <span class="item-tipo"><i class="fas fa-camera"></i> FOTO</span>
                        <h4>${item.titulo}</h4>
                        <p>${item.album ? galeriaDB.albuns[item.album].titulo : 'Álbum'}</p>
                    </div>
                    <div class="item-acoes">
                        <button class="btn-ampliar" title="Ampliar">
                            <i class="fas fa-expand"></i>
                        </button>
                        ${item.favorito ? 
                            '<button class="btn-favorito ativo" title="Remover dos favoritos"><i class="fas fa-heart"></i></button>' : 
                            '<button class="btn-favorito" title="Adicionar aos favoritos"><i class="far fa-heart"></i></button>'
                        }
                    </div>
                </div>
            </div>
            <div class="item-metadata">
                <span class="item-data"><i class="far fa-calendar"></i> ${item.data}</span>
                <span class="item-views"><i class="far fa-eye"></i> ${item.visualizacoes.toLocaleString('pt-BR')}</span>
            </div>
        `;
    }
    
    // Event listeners
    const btnAmpliar = div.querySelector('.btn-ampliar, .btn-assistir');
    const btnFavorito = div.querySelector('.btn-favorito');
    
    if (btnAmpliar) {
        btnAmpliar.addEventListener('click', (e) => {
            e.stopPropagation();
            abrirModal(item);
        });
    }
    
    if (btnFavorito) {
        btnFavorito.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorito(item.id);
            atualizarBotaoFavorito(btnFavorito, item.id);
        });
    }
    
    div.addEventListener('click', () => {
        abrirModal(item);
    });
    
    return div;
}

// ===== CONFIGURAR FILTROS =====
function configurarFiltros() {
    const botoesFiltro = document.querySelectorAll('.filtro-btn');
    
    botoesFiltro.forEach(botao => {
        botao.addEventListener('click', () => {
            // Atualizar botão ativo
            botoesFiltro.forEach(b => b.classList.remove('ativo'));
            botao.classList.add('ativo');
            
            // Aplicar filtro
            filtroAtual = botao.dataset.filtro;
            aplicarFiltro();
        });
    });
}

// ===== APLICAR FILTRO =====
function aplicarFiltro() {
    if (filtroAtual === 'todos') {
        itensFiltrados = galeriaDB.itens;
    } else if (filtroAtual === 'fotos') {
        itensFiltrados = galeriaDB.itens.filter(item => item.tipo === 'foto');
    } else if (filtroAtual === 'videos') {
        itensFiltrados = galeriaDB.itens.filter(item => item.tipo === 'video');
    } else {
        itensFiltrados = galeriaDB.itens.filter(item => 
            item.categorias.includes(filtroAtual)
        );
    }
    
    itensVisiveis = 12;
    renderizarGaleria();
    atualizarContador();
    
    // Scroll para topo da galeria
    document.querySelector('.galeria-grid').scrollIntoView({ behavior: 'smooth' });
}

// ===== ATUALIZAR CONTADOR =====
function atualizarContador() {
    const contador = document.getElementById('galeria-contador');
    if (contador) {
        const total = itensFiltrados.length;
        const mostrando = Math.min(itensVisiveis, total);
        contador.textContent = `Mostrando ${mostrando} de ${total} itens`;
    }
}

// ===== ATUALIZAR ESTATÍSTICAS =====
function atualizarEstatisticas() {
    const totalFotos = galeriaDB.itens.filter(item => item.tipo === 'foto').length;
    const totalVideos = galeriaDB.itens.filter(item => item.tipo === 'video').length;
    const totalViews = galeriaDB.itens.reduce((sum, item) => sum + item.visualizacoes, 0);
    
    document.getElementById('total-fotos').textContent = totalFotos;
    document.getElementById('total-videos').textContent = totalVideos;
    document.getElementById('total-views').textContent = totalViews.toLocaleString('pt-BR');
}

// ===== CARREGAR MAIS ITENS =====
document.getElementById('carregar-mais')?.addEventListener('click', () => {
    itensVisiveis += 12;
    renderizarGaleria();
    atualizarContador();
});

// ===== CONFIGURAR MODAL =====
function configurarModal() {
    const modal = document.getElementById('modal-galeria');
    const modalVideo = document.getElementById('modal-video');
    const btnFechar = document.getElementById('fechar-modal');
    const btnFecharVideo = document.getElementById('fechar-modal-video');
    
    // Fechar modal ao clicar fora
    [modal, modalVideo].forEach(m => {
        m?.addEventListener('click', (e) => {
            if (e.target === m) {
                m.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    // Fechar com botão
    btnFechar?.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    btnFecharVideo?.addEventListener('click', () => {
        modalVideo.style.display = 'none';
        document.body.style.overflow = 'auto';
        // Pausar vídeo
        const iframe = document.getElementById('video-player');
        if (iframe) {
            iframe.src = iframe.src; // Recarregar para pausar
        }
    });
    
    // Fechar com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.style.display = 'none';
            modalVideo.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Navegação no modal
    document.getElementById('btn-anterior')?.addEventListener('click', () => {
        navegarModal('anterior');
    });
    
    document.getElementById('btn-proximo')?.addEventListener('click', () => {
        navegarModal('proximo');
    });
    
    // Download
    document.getElementById('btn-download')?.addEventListener('click', () => {
        if (itemAtualModal) {
            const link = document.createElement('a');
            link.href = itemAtualModal.url;
            link.download = `quadrilha-${itemAtualModal.titulo.toLowerCase().replace(/\s+/g, '-')}.${itemAtualModal.tipo === 'foto' ? 'jpg' : 'mp4'}`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    });
    
    // Compartilhar
    document.getElementById('btn-compartilhar')?.addEventListener('click', () => {
        if (itemAtualModal && navigator.share) {
            navigator.share({
                title: itemAtualModal.titulo,
                text: `Confira esta ${itemAtualModal.tipo} do Arraiá do Nordeste!`,
                url: window.location.href,
            });
        } else {
            // Fallback: copiar link
            navigator.clipboard.writeText(window.location.href).then(() => {
                alert('Link copiado para a área de transferência!');
            });
        }
    });
}

// ===== ABRIR MODAL =====
function abrirModal(item) {
    itemAtualModal = item;
    
    if (item.tipo === 'video') {
        const modal = document.getElementById('modal-video');
        const iframe = document.getElementById('video-player');
        const titulo = document.getElementById('modal-titulo-video');
        
        iframe.src = item.url;
        titulo.textContent = item.titulo;
        modal.style.display = 'block';
    } else {
        const modal = document.getElementById('modal-galeria');
        const midiaContainer = document.getElementById('modal-midia');
        const titulo = document.getElementById('modal-titulo');
        const descricao = document.getElementById('modal-descricao');
        const data = document.getElementById('modal-data');
        const views = document.getElementById('modal-views');
        const tamanho = document.getElementById('modal-tamanho');
        const contador = document.getElementById('contador-modal');
        
        // Atualizar conteúdo
        midiaContainer.innerHTML = `<img src="${item.url}" alt="${item.titulo}">`;
        titulo.textContent = item.titulo;
        descricao.textContent = item.descricao;
        data.innerHTML = `<i class="far fa-calendar"></i> ${item.data}`;
        views.innerHTML = `<i class="far fa-eye"></i> ${item.visualizacoes.toLocaleString('pt-BR')} visualizações`;
        tamanho.innerHTML = `<i class="fas fa-weight-hanging"></i> ${item.tamanho}`;
        
        // Atualizar contador
        const indice = itensFiltrados.findIndex(i => i.id === item.id) + 1;
        contador.textContent = `${indice} de ${itensFiltrados.length}`;
        
        // Mostrar modal
        modal.style.display = 'block';
    }
    
    document.body.style.overflow = 'hidden';
    
    // Atualizar visualizações
    item.visualizacoes++;
    atualizarEstatisticas();
}

// ===== NAVEGAR NO MODAL =====
function navegarModal(direcao) {
    if (!itemAtualModal) return;
    
    const indiceAtual = itensFiltrados.findIndex(item => item.id === itemAtualModal.id);
    let novoIndice;
    
    if (direcao === 'anterior') {
        novoIndice = indiceAtual > 0 ? indiceAtual - 1 : itensFiltrados.length - 1;
    } else {
        novoIndice = indiceAtual < itensFiltrados.length - 1 ? indiceAtual + 1 : 0;
    }
    
    const novoItem = itensFiltrados[novoIndice];
    if (novoItem) {
        abrirModal(novoItem);
    }
}

// ===== FAVORITOS =====
function toggleFavorito(id) {
    const item = galeriaDB.itens.find(item => item.id === id);
    if (item) {
        item.favorito = !item.favorito;
        
        // Salvar no localStorage
        const favoritos = JSON.parse(localStorage.getItem('favoritosGaleria') || '[]');
        if (item.favorito) {
            if (!favoritos.includes(id)) {
                favoritos.push(id);
            }
        } else {
            const index = favoritos.indexOf(id);
            if (index > -1) {
                favoritos.splice(index, 1);
            }
        }
        localStorage.setItem('favoritosGaleria', JSON.stringify(favoritos));
    }
}

function atualizarBotaoFavorito(botao, id) {
    const item = galeriaDB.itens.find(item => item.id === id);
    if (item) {
        if (item.favorito) {
            botao.innerHTML = '<i class="fas fa-heart"></i>';
            botao.classList.add('ativo');
            botao.title = 'Remover dos favoritos';
        } else {
            botao.innerHTML = '<i class="far fa-heart"></i>';
            botao.classList.remove('ativo');
            botao.title = 'Adicionar aos favoritos';
        }
    }
}

// ===== CARREGAR FAVORITOS DO LOCALSTORAGE =====
function carregarFavoritos() {
    const favoritos = JSON.parse(localStorage.getItem('favoritosGaleria') || '[]');
    galeriaDB.itens.forEach(item => {
        item.favorito = favoritos.includes(item.id);
    });
}

// ===== BUSCA POR ÁLBUM DA URL =====
function verificarAlbumURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const album = urlParams.get('album');
    
    if (album && galeriaDB.albuns[album]) {
        // Filtrar por álbum específico
        itensFiltrados = galeriaDB.itens.filter(item => item.album === album);
        filtroAtual = 'todos';
        
        // Atualizar título
        const titulo = document.querySelector('.galeria-header h1');
        if (titulo) {
            titulo.innerHTML = `<i class="fas fa-images"></i> ${galeriaDB.albuns[album].titulo}`;
        }
        
        const descricao = document.querySelector('.galeria-header p');
        if (descricao) {
            descricao.textContent = galeriaDB.albuns[album].descricao;
        }
        
        renderizarGaleria();
        atualizarContador();
    }
}

// Carregar favoritos ao iniciar
carregarFavoritos();

// Verificar se há álbum na URL
verificarAlbumURL();