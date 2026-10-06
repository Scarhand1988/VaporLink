import { BleManager, Device } from 'react-native-ble-plx';

/**
 * Phase 2 service skeleton.
 * We deliberately do NOT hard-code GATT characteristic UUIDs yet.
 * First we connect to the user's actual CRAFTY/CRAFTY+ and inspect the
 * services/characteristics so the protocol layer can be verified safely.
 */
export class CraftyBleService {
  private manager = new BleManager();
  private device: Device | null = null;

  async scanAndConnect(timeoutMs = 12_000): Promise<Device> {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.manager.stopDeviceScan();
        reject(new Error('Kein CRAFTY-Gerät gefunden.'));
      }, timeoutMs);

      this.manager.startDeviceScan(null, null, async (error, device) => {
        if (error) {
          clearTimeout(timer);
          this.manager.stopDeviceScan();
          reject(error);
          return;
        }

        const name = (device?.name ?? device?.localName ?? '').toUpperCase();
        if (!device || !name.includes('CRAFTY')) return;

        try {
          clearTimeout(timer);
          this.manager.stopDeviceScan();
          const connected = await device.connect();
          await connected.discoverAllServicesAndCharacteristics();
          this.device = connected;
          resolve(connected);
        } catch (e) {
          reject(e);
        }
      });
    });
  }

  async disconnect() {
    if (!this.device) return;
    await this.manager.cancelDeviceConnection(this.device.id);
    this.device = null;
  }

  destroy() {
    this.manager.destroy();
  }
}
