# Docker Deployment

Zentro provides an official Docker image for easy deployment.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed on your machine.
- A `config` directory containing your `routes.json` and `consumers.json`.

## Pulling the Image

The official image is hosted on Docker Hub:

```bash
docker pull fortuneiyke/zentro-api-gateway:latest
```

## Running the Container

To run Zentro, you must mount your local configuration directory into the container. The container expects configuration files to be at `/app/config`.

### Basic Usage

```bash
docker run -d \
  --name zentro \
  -p 8787:8787 \
  -p 8788:8788 \
  -v $(pwd)/config:/app/config \
  fortuneiyke/zentro-api-gateway:latest
```

### Explanation

- `-d`: Runs the container in detached mode (background).
- `--name zentro`: Assigns the name "zentro" to the container.
- `-p 8787:8787`: Maps the Gateway Proxy port.
- `-p 8788:8788`: Maps the Management UI port.
- `-v $(pwd)/config:/app/config`: Mounts your local `config` folder to the container's configuration path.

## Building Locally

If you prefer to build the image yourself:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/fike110/zendor-api-gateway.git
    cd zendor-api-gateway
    ```

2.  **Build the image:**
    ```bash
    docker build -t zentro-local .
    ```

3.  **Run the local image:**
    ```bash
    docker run -d \
      -p 8787:8787 \
      -p 8788:8788 \
      -v $(pwd)/config:/app/config \
      zentro-local
    ```
