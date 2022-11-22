<?php

class DadosService {
  
  private $conexao;

  public function __constructor($conexao) {
    $this->conexao = $conexao->conectar();
  }
  public function recuperar() {

  }
}
?>