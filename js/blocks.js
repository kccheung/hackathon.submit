/**
 * Blockly Demos: Plane Seat Calculator Blocks
 *
 * Copyright 2013 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Blocks for Blockly's Plane Seat Calculator application.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

Blockly.Blocks['think'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.VARIABLES_SET_HELPURL);
    this.setColour(315);
    this.appendDummyInput()
        .appendField("think");
    this.setInputsInline(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

//actions
Blockly.Blocks['move_to_direction'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(195);
    this.appendDummyInput()
        .appendField("Move")
        .appendField(new Blockly.FieldDropdown([[" up", "move_up"], ["down", "move_down"], ["left", "move_left"], ["right", "move_right"]]), "move_dropdown");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['shoot'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(65);
    this.appendDummyInput()
        .appendField("Shoot");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setTooltip('');
  }
};

//variables
Blockly.Blocks['tanks_count'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(90);
    this.appendDummyInput()
        .appendField("tanks count");
    this.setOutput(true);
    this.setTooltip('');
  }
};

//generators
// act as start
Blockly.JavaScript['think'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  return Blockly.JavaScript.statementToCode(block, 'DO');
};

// turn tank to face that direction
Blockly.JavaScript['move_to_direction'] = function(block) {
  var dropdown_move_dropdown = block.getFieldValue('move_dropdown');
  var code = '';
  if (dropdown_move_dropdown === 'move_down'){
    code = 'PlayerTank.moveBottom();';
  } else if (dropdown_move_dropdown === 'move_up'){
    code = 'PlayerTank.moveTop();';
  } else if (dropdown_move_dropdown === 'move_left'){
    code = 'PlayerTank.moveLeft();';
  } else if (dropdown_move_dropdown === 'move_right'){
    code = 'PlayerTank.moveRight();';
  }
  // TODO: Assemble JavaScript into code variable.
  return code;
};


Blockly.JavaScript['shoot'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'PlayerTank.shoot();';
  return code;
};

Blockly.JavaScript['tanks_count'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'Game.allTanksCount()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


// facing opponent: found opponent
