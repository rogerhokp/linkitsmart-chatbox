# linkitsmart-chatbox

Mounting the root FS on an SD card
- https://docs.labs.mediatek.com/resource/linkit-smart-7688/en/tutorials/file-storage/mounting-the-root-fs-on-an-sd-card
- confirm ext4 support
   - check supported file system `cat /proc/filesystems`
   - check keneral version `uname -r` 
   - Install kmod-fs-ext4
      - `wget http://openwrt.jaru.eu.org/chaos_calmer/ramips/packages/kmod-fs-ext4_3.18.45-1_ramips_24kec.ipk`
      - `opkg install kmod-fs-ext4_3.18.45-1_ramips_24kec.ipk --nodeps`
- or use vfat instead of ext4
    - `opkg update`
    - `opkg install mkdosfs`
    - `mkfs.vfat /dev/mmcblk0p1` instead of `mkfs.ext4 /dev/mmcblk0p1`
