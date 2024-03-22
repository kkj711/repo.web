let currentPlayer = "X"; // Jogador atual (X ou O)
        let gameStatus = "Em andamento"; // Status do jogo (Em andamento, Vitória, Empate)

        // Função para verificar se houve um vencedor
        function checkWinner() {
            let cells = [];
            for (let i = 1; i <= 9; i++) {
                cells.push(document.getElementById('b' + i).value);
            }

            // Combinacões de células que levam à vitória
            const winCombos = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];

            for (let combo of winCombos) {
                if (cells[combo[0]] === cells[combo[1]] &&
                    cells[combo[1]] === cells[combo[2]] &&
                    cells[combo[0]] !== "") {
                    return cells[combo[0]];
                }
            }

            // Verificar empate
            if (!cells.includes("")) {
                return "Empate";
            }

            return null;
        }

        // Função para realizar uma jogada
        function makeMove(cellId) {
            let cell = document.getElementById(cellId);
            if (cell.value === "" && gameStatus === "Em andamento") {
                cell.value = currentPlayer;
                currentPlayer = currentPlayer === "X" ? "O" : "X"; // Alternar entre jogadores
                updateStatus();
            }
        }

        // Função para atualizar o status do jogo
        function updateStatus() {
            let winner = checkWinner();
            if (winner) {
                gameStatus = winner === "Empate" ? "Empate" : "Vitória"; // Se houver um vencedor ou empate
                document.getElementById("but").disabled = true; // Desativar o botão "INICIAR"
            }
            document.getElementById("status").textContent = "Jogador " + currentPlayer + ", Jogo: " + gameStatus;
        }

        // Função para reiniciar o jogo
        function restartGame() {
            currentPlayer = "X";
            gameStatus = "Em andamento";
            for (let i = 1; i <= 9; i++) {
                document.getElementById('b' + i).value = ""; // Limpar os valores das células
            }
            document.getElementById("but").disabled = false; // Ativar o botão "INICIAR"
            document.getElementById("status").textContent = "Jogador " + currentPlayer + ", Jogo: " + gameStatus;
        }