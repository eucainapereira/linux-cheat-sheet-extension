// ============================================================
//  Linux Cheat Sheet - app.js (Versão de Segurança)
// ============================================================

const categories = [
  {
    id: "sistema",
    label: "🖥️  Sistema",
    description: "Comandos essenciais para gerenciamento e monitoramento do sistema.",
    commands: [
      { command: "uname -a", descricao: "Exibe todas as informações do kernel e sistema operacional." },
      { command: "uptime", descricao: "Mostra há quanto tempo o sistema está ligado e a carga atual." },
      { command: "top", descricao: "Monitora processos e recursos do sistema em tempo real." },
      { command: "htop", descricao: "Versão melhorada do top, com interface colorida e interativa." },
      { command: "df -h", descricao: "Exibe o uso do disco em formato legível por humanos." },
      { command: "du -sh *", descricao: "Mostra o tamanho de cada arquivo/pasta no diretório atual." },
      { command: "free -h", descricao: "Exibe o uso de memória RAM e SWAP do sistema." },
      { command: "lscpu", descricao: "Mostra informações detalhadas sobre a CPU." },
      { command: "lsblk", descricao: "Lista todos os dispositivos de bloco (discos e partições)." },
      { command: "vmstat 1 5", descricao: "Estatísticas de memória, processos e CPU a cada 1s." },
      { command: "iostat -x 1", descricao: "Monitora estatísticas de I/O de disco em tempo real." },
      { command: "timedatectl", descricao: "Gerencia o fuso horário e sincronização de hora." },
      { command: "hostnamectl", descricao: "Exibe e altera o hostname da máquina." },
      { command: "systemctl status", descricao: "Exibe o status geral do systemd e serviços." },
      { command: "crontab -e", descricao: "Edita as tarefas agendadas do usuário atual." },
      { command: "history", descricao: "Exibe o histórico de comandos digitados." },
      { command: "shutdown -r now", descricao: "Reinicia o sistema imediatamente." },
    ]
  },
  {
    id: "processos",
    label: "⚙️  Processos",
    description: "Gerencie e monitore processos em execução no sistema.",
    commands: [
      { command: "ps aux", descricao: "Lista todos os processos em execução no sistema." },
      { command: "ps aux | grep nginx", descricao: "Filtra processos em execução pelo nome." },
      { command: "kill -9 <PID>", descricao: "Força o encerramento de um processo pelo PID." },
      { command: "killall -9 nginx", descricao: "Encerra todos os processos pelo nome." },
      { command: "jobs", descricao: "Lista processos em background do shell atual." },
      { command: "bg %1", descricao: "Envia um processo para o background." },
      { command: "fg %1", descricao: "Traz um processo para o primeiro plano." },
      { command: "nohup command &", descricao: "Mantém o comando rodando após logout." },
      { command: "nice -n 10 command", descricao: "Executa com prioridade reduzida." },
      { command: "pgrep nginx", descricao: "Retorna o PID de processos pelo nome." },
      { command: "pkill -f script.py", descricao: "Encerra processos pelo padrão do comando completo." },
    ]
  },
  {
    id: "arquivos",
    label: "📁  Arquivos",
    description: "Manipule arquivos e diretórios com eficiência.",
    commands: [
      { command: "ls -la", descricao: "Lista todos os arquivos com detalhes, incluindo ocultos." },
      { command: "ls -lhS", descricao: "Lista arquivos ordenados por tamanho (maior primeiro)." },
      { command: "cd /caminho", descricao: "Navega para o diretório especificado." },
      { command: "pwd", descricao: "Exibe o caminho absoluto do diretório atual." },
      { command: "mkdir -p dir/sub", descricao: "Cria subdiretórios de forma recursiva." },
      { command: "rm -rf /dir", descricao: "Remove recursivamente diretorio e conteúdo (Cuidado!)." },
      { command: "cp -rv origem/ destino/", descricao: "Copia diretórios exibindo o progresso." },
      { command: "mv arq1.txt arq2.txt", descricao: "Move ou renomeia um arquivo." },
      { command: "find . -name '*.log'", descricao: "Busca arquivos por nome a partir do dir atual." },
      { command: "find . -size +100M", descricao: "Busca arquivos maiores que 100MB." },
      { command: "tar -czvf arq.tar.gz /dir", descricao: "Cria arquivo comprimido .tar.gz." },
      { command: "tar -xzvf arq.tar.gz", descricao: "Extrai conteúdo de um .tar.gz." },
      { command: "rsync -avz origem/ destino/", descricao: "Sincroniza arquivos eficientemente." },
      { command: "cat arquivo.txt", descricao: "Exibe o conteúdo completo de um arquivo." },
      { command: "head -n 20 arq.txt", descricao: "Exibe as primeiras 20 linhas." },
      { command: "tail -f arq.log", descricao: "Monitora novas linhas do log em tempo real." },
      { command: "stat arquivo.txt", descricao: "Exibe metadados detalhados de um arquivo." },
    ]
  },
  {
    id: "pacotes",
    label: "📦  Pacotes",
    description: "Gerenciamento de software e repositórios.",
    commands: [
      { command: "sudo apt update", descricao: "Atualiza a lista de pacotes dos repositórios." },
      { command: "sudo apt upgrade", descricao: "Atualiza todos os pacotes instalados." },
      { command: "sudo apt install <pkg>", descricao: "Instala um novo pacote pelo nome." },
      { command: "sudo dnf install <pkg>", descricao: "Instala um pacote usando o DNF (Fedora/RHEL)." },
      { command: "sudo pacman -S <pkg>", descricao: "Instala um novo pacote (Arch Linux)." },
      { command: "sudo snap install <pkg>", descricao: "Instala um pacote via Snap." },
    ]
  },
  {
    id: "modernas",
    label: "🚀  Modernas (Rust)",
    description: "Alternativas modernas e rápidas para comandos clássicos.",
    commands: [
      { command: "bat arquivo.txt", descricao: "Alternativa ao 'cat' com syntax highlighting." },
      { command: "eza -la --icons", descricao: "Alternativa ao 'ls' com ícones e cores." },
      { command: "fd padrao", descricao: "Alternativa ao 'find' muito mais rápida." },
      { command: "rg 'padrao'", descricao: "RipGrep: Alternativa extremamente veloz ao 'grep'." },
      { command: "btm", descricao: "Monitor de sistema interativo e gráfico." },
      { command: "z caminho", descricao: "Navegação inteligente baseada em uso." },
    ]
  },
  {
    id: "rede",
    label: "🌐  Rede",
    description: "Diagnóstico e monitoramento de rede.",
    commands: [
      { command: "ip addr show", descricao: "Exibe endereços IP de todas as interfaces." },
      { command: "ip route show", descricao: "Exibe a tabela de roteamento." },
      { command: "ping -c 4 google.com", descricao: "Testa a conectividade com o host." },
      { command: "ss -tlnp", descricao: "Lista todas as portas TCP em escuta." },
      { command: "nmap -sV host", descricao: "Varre o host detectando serviços e versões." },
      { command: "mtr google.com", descricao: "Combina ping e traceroute em uma ferramenta." },
    ]
  },
  {
    id: "editores",
    label: "📝  Editores",
    description: "Comandos rápidos para editores de texto.",
    commands: [
      { command: "vim arquivo.txt", descricao: "Abre o editor Vim." },
      { command: ":wq", descricao: "Salva e sai do Vim." },
      { command: "nano arquivo.txt", descricao: "Abre o editor Nano." },
      { command: "Ctrl + O", descricao: "Salva o arquivo no Nano." },
    ]
  },
  {
    id: "configuracao",
    label: "🐚  Scripting",
    description: "Lógica de Shell Scripting e customização.",
    commands: [
      { command: "#!/bin/bash", descricao: "Shebang para scripts Bash." },
      { command: "source ~/.bashrc", descricao: "Recarrega configurações do shell." },
      { command: "alias name='command'", descricao: "Cria um apelido para um comando." },
    ]
  },
  {
    id: "docker",
    label: "🐳  Docker",
    description: "Gerenciamento de containers e imagens.",
    commands: [
      { command: "docker ps", descricao: "Lista containers em execução." },
      { command: "docker images", descricao: "Lista imagens Docker locais." },
      { command: "docker run -it ubuntu bash", descricao: "Inicia um container interativo." },
      { command: "docker-compose up -d", descricao: "Sobe serviços em background." },
    ]
  },
  {
    id: "git",
    label: "🔀  Git",
    description: "Controle de versão.",
    commands: [
      { command: "git init", descricao: "Inicializa um repositório Git." },
      { command: "git status", descricao: "Exibe o estado dos arquivos." },
      { command: "git add .", descricao: "Adiciona alterações para commit." },
      { command: "git commit -m 'msg'", descricao: "Cria um commit." },
      { command: "git push origin main", descricao: "Envia commits para o remoto." },
    ]
  },
  {
    id: "seguranca",
    label: "🛡️  Seguranca",
    description: "Auditoria e hardening.",
    commands: [
      { command: "lynis audit system", descricao: "Auditoria completa de segurança." },
      { command: "chkrootkit", descricao: "Verifica o sistema em busca de rootkits." },
      { command: "rkhunter --check", descricao: "Varredura avançada de segurança." },
      { command: "fail2ban-client status", descricao: "Status das jails do Fail2Ban." },
      { command: "openssl rand -hex 32", descricao: "Gera chave aleatória segura de 64 chars." },
      { command: "sestatus", descricao: "Status do SELinux." },
    ]
  },
  {
    id: "permissoes",
    label: "🔐  Permissões",
    description: "Controle de acesso e usuários.",
    commands: [
      { command: "chmod 755 script.sh", descricao: "Dono: rwx, Grupo/Outros: r-x." },
      { command: "chmod +x script.sh", descricao: "Torna o arquivo executável." },
      { command: "chown user:group arq", descricao: "Altera dono e grupo de um arquivo." },
      { command: "sudo command", descricao: "Executa como superusuário." },
      { command: "usermod -aG sudo user", descricao: "Dá privilégios root a um usuário." },
      { command: "passwd", descricao: "Altera a senha do usuário logado." },
      { command: "umask 022", descricao: "Define permissões padrão para novos arquivos." },
    ]
  },
  {
    id: "texto",
    label: "🔍  Texto",
    description: "Busca e filtragem de conteúdo.",
    commands: [
      { command: "grep 'termo' arq", descricao: "Busca termo dentro de um arquivo." },
      { command: "grep -r 'termo' /dir", descricao: "Busca termo recursivamente em diretório." },
      { command: "awk '{print $1}' arq", descricao: "Imprime a primeira coluna de um arquivo." },
      { command: "sed 's/v/n/g' arq", descricao: "Substitui texto (sem salvar)." },
      { command: "sed -i 's/v/n/g' arq", descricao: "Substitui texto e salva no arquivo." },
      { command: "cut -d: -f1 /etc/passwd", descricao: "Corta texto por delimitador." },
      { command: "sort | uniq -c", descricao: "Ordena e conta linhas duplicadas." },
    ]
  }
];

// Gerenciamento de Estado
let activeCategory = categories[0].id;
let searchTerm = "";

// Funções de Renderização
function renderNav() {
  try {
    const menu = document.getElementById("categoryMenu");
    if (!menu) return;
    menu.innerHTML = "";
    categories.forEach(cat => {
      const item = document.createElement("div");
      item.className = `nav-item ${cat.id === activeCategory ? "active" : ""}`;
      item.textContent = cat.label;
      item.addEventListener("click", () => {
        activeCategory = cat.id;
        searchTerm = "";
        const searchInput = document.getElementById("searchInput");
        if (searchInput) searchInput.value = "";
        renderNav();
        renderCommands();
      });
      menu.appendChild(item);
    });
  } catch (e) {
    console.error("Erro no renderNav:", e);
  }
}

function renderCommands() {
  try {
    const category = categories.find(c => c.id === activeCategory);
    if (!category) return;

    const grid = document.getElementById("commandGrid");
    const title = document.getElementById("currentCategoryTitle");
    const desc = document.getElementById("currentCategoryDesc");

    if (title) title.textContent = category.label.replace(/^.+?\s+/, "");
    if (desc) desc.textContent = category.description;

    const filtered = category.commands.filter(cmd => {
      const cmdText = (cmd.command || "").toLowerCase();
      const descText = (cmd.descricao || "").toLowerCase();
      return cmdText.includes(searchTerm) || descText.includes(searchTerm);
    });

    if (grid) {
      grid.innerHTML = "";
      if (filtered.length === 0) {
        grid.innerHTML = `<p class="no-results">Nenhum comando encontrado.</p>`;
        return;
      }

      filtered.forEach((cmd, index) => {
        const card = document.createElement("div");
        card.className = "command-card";
        card.style.animationDelay = `${index * 0.02}s`;
        card.innerHTML = `
          <div class="command-header">
            <span class="command-code-block">${escapeHtml(cmd.command)}</span>
            <button class="btn-copy" data-command="${cmd.command}">Copiar</button>
          </div>
          <p class="command-desc">${escapeHtml(cmd.descricao)}</p>
        `;
        grid.appendChild(card);
      });

      // Adicionar listeners de clique para botões de cópia
      grid.querySelectorAll('.btn-copy').forEach(btn => {
        btn.addEventListener('click', () => {
          const textToCopy = btn.getAttribute('data-command');
          copyCommand(textToCopy);
        });
      });
    }
  } catch (e) {
    console.error("Erro no renderCommands:", e);
  }
}

// Funções Utilitárias
function copyCommand(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast();
  }).catch(err => {
    // Fallback para navegadores que bloqueiam clipboard em popups
    const el = document.createElement("textarea");
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    showToast();
  });
}

function showToast() {
  const toast = document.getElementById("copyToast");
  if (toast) {
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2000);
  }
}

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/[&<>"']/g, function(m) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[m];
  });
}

// Inicialização Segura
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchTerm = e.target.value.toLowerCase().trim();
      renderCommands();
    });
  }
  
  renderNav();
  renderCommands();
});
