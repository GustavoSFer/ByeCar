<?php
// Classe de conexao. fake
class Conexao {

  private $host = 'localhost';
  private $dbname = 'byecar';
  private $user = 'root';
  private $pass = '';

  public function conectar() {
    try {
      $conexao = new PDO(
        "mysql:host=$this->host;dbname=$this->dbname",
        "$this->user",
        "$this->pass"
      );

      return $conexao;

    } catch (PDOException $e) {
      echo '<p>'.$e->getMessage().'</p>';
    }
  }
}
?>