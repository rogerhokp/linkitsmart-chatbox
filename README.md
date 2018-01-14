# linkitsmart-chatbox

Mounting the root FS on an SD card
- https://docs.labs.mediatek.com/resource/linkit-smart-7688/en/tutorials/file-storage/mounting-the-root-fs-on-an-sd-card
- confirm ext4 support
   - `cat /proc/filesystems`
   - `uname -r` check keneral version
   - ```
   wget http://openwrt.jaru.eu.org/chaos_calmer/ramips/packages/kmod-fs-ext4_3.18.45-1_ramips_24kec.ipk
   opkg install kmod-fs-ext4_3.18.45-1_ramips_24kec.ipk --nodeps
   ```
 
