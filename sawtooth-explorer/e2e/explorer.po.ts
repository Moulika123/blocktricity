/**
 * Copyright 2017 PokitDok, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ------------------------------------------------------------------------------
 */

import { browser, by, element, ExpectedConditions } from 'protractor';

export class ExplorerPage {
  navigateTo() {
    return browser.get('/explorer');
  }

  switchViewType(optionIdx) {
    let select = element(by.css('#mat-select-0'));
    browser.wait(ExpectedConditions.presenceOf(select), 3000);
    select.click();

    let option = element(by.id('mat-option-' + optionIdx));
    option.click();
  }
}
