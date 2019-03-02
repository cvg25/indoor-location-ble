FROM balenalib/raspberrypi3-node:8.11

LABEL maintainer="carlosvelezgarcia@gmail.com"

RUN install_packages build-essential bluez bluez-tools python libudev-dev

CMD ["bash"]

VOLUME "/code"
WORKDIR /code