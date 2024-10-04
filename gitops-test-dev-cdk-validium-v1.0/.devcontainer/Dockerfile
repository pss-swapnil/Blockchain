FROM ubuntu:22.04

# Install necessary packages
RUN apt-get update && apt-get install -y \
    build-essential \
    curl \
    git \
    make \
    sudo \
    docker.io \
    && rm -rf /var/lib/apt/lists/*

# Install Docker Compose v2.29.1
RUN curl -SL https://github.com/docker/compose/releases/download/v2.29.1/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose && \
    chmod +x /usr/local/bin/docker-compose

# Install Node.js and npm
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs

# Download Go 1.21.12 (64-bit) and verify the hash
RUN curl -LO https://golang.org/dl/go1.21.12.linux-amd64.tar.gz && \
    echo "121ab58632787e18ae0caa8ae285b581f9470d0f6b3defde9e1600e211f583c5 go1.21.12.linux-amd64.tar.gz" | sha256sum -c -

# Extract and install Go
RUN tar -C /usr/local -xzf go1.21.12.linux-amd64.tar.gz && \
    rm go1.21.12.linux-amd64.tar.gz

# Set up Go environment variables
ENV PATH="/usr/local/go/bin:${PATH}"

# Set up the working directory
WORKDIR /workspace

# Copy the repository into the container
COPY . .

# Create a non-root user and add to the docker group
RUN useradd -ms /bin/bash vscode && \
    (getent group docker || groupadd docker) && \
    usermod -aG docker vscode && \
    echo "vscode ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

# Change ownership of the /workspace directory
RUN chown -R vscode:vscode /workspace

# Switch to non-root user
USER vscode

# Default command to run
CMD ["sleep", "infinity"]