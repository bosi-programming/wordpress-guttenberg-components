<?php

/**
 * Plugin Name: Bosi Backend Components
 * */

function register_code()
{
  $code_file = include(plugin_dir_path(__FILE__) . 'code/build/index.asset.php');

  wp_register_script(
    'code',
    plugins_url('code/build/index.js', __FILE__),
    $code_file['dependencies'],
    $code_file['version']
  );

  register_block_type('bosi-backend-blocks/code', array(
    'editor_script' => 'code'
  ));
}

add_action('init', 'register_code');
