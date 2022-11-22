<?php

  require "../../src/conexao.php";

  // Ao clicar no botão é lançado um evendo que recupera o token
  btnGetDados.addEventListener('click', async (e) => {
    const res = await fetch('/dados.php', {
      headers: {
        'Authorization': `Bearer ${store.JWT}`
      }
    });
    const timeStamp = await res.text();
    console.log(timeStamp);
  });

  // Verifica a ação e salva na variavel
  $acao = isset($_GET['acao']) ? $_GET['acao'] : $acao;

  // Se a ação for "Recuperar" vamos criar o conexão com o banco e chamar a nossa função 'recuperar()'.
  if ($acao == 'recuperar') {
    $conexao = new Conexao();

    $dadosService = new DadosService($conexao);
    $dadosService->recuperar();
  }
?>