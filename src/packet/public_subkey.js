// GPG4Browsers - An OpenPGP implementation in javascript
// Copyright (C) 2011 Recurity Labs GmbH
//
// This library is free software; you can redistribute it and/or
// modify it under the terms of the GNU Lesser General Public
// License as published by the Free Software Foundation; either
// version 3.0 of the License, or (at your option) any later version.
//
// This library is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
// Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public
// License along with this library; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA

/**
 * @requires packet/public_key
 * @requires enums
 * @module packet/public_subkey
 */

import publicKey from './public_key.js';
import enums from '../enums.js';

/**
 * A Public-Subkey packet (tag 14) has exactly the same format as a
 * Public-Key packet, but denotes a subkey.  One or more subkeys may be
 * associated with a top-level key.  By convention, the top-level key
 * provides signature services, and the subkeys provide encryption
 * services.
 * @constructor
 * @extends module:packet/public_key
 */
function PublicSubkey() {
  publicKey.call(this);
  this.tag = enums.packet.publicSubkey;
}

PublicSubkey.prototype = new publicKey();
PublicSubkey.prototype.constructor = PublicSubkey;

export default PublicSubkey;
