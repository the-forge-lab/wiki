# MetaDocs: My note system


### with pip <small>recommended</small> { #with-pip data-toc-label="with pip" }

Material for MkDocs is published as a [Python package] and can be installed with
`pip`, ideally by using a [virtual environment]. Open up a terminal and install
Material for MkDocs with:

=== "Latest"

    ``` sh
    pip install mkdocs-material
    ```

=== "8.x"

    ``` sh
    pip install mkdocs-material=="8.*" # (1)!
    ```

    1.  Material for MkDocs uses [semantic versioning][^1], which is why it's a
        good idea to limit upgrades to the current major version.

        This will make sure that you don't accidentally [upgrade to the next
        major version], which may include breaking changes that silently corrupt
        your site. Additionally, you can use `pip freeze` to create a lockfile,
        so builds are reproducible at all times:

        ```
        pip freeze > requirements.txt
        ```

        Now, the lockfile can be used for installation:

        ```
        pip install -r requirements.txt
        ```

  [^1]:
    Note that improvements of existing features are sometimes released as
    patch releases, like for example improved rendering of content tabs, as
    they're not considered to be new features.

This will automatically install compatible versions of all dependencies:
[MkDocs], [Markdown], [Pygments] and [Python Markdown Extensions]. Material for
MkDocs always strives to support the latest versions, so there's no need to
install those packages separately.

!!! info ":material-apple: Apple Silicon (M1) and :fontawesome-brands-raspberry-pi: Raspberry Pi"

    The official Docker image is only available for `linux/amd64`. We recommend
    the [third-party image] by @afritzler if you want to run Material for MkDocs
    via Docker on `arm64` or `armv7`, as it is automatically built on every
    release:

    ```
    docker pull ghcr.io/afritzler/mkdocs-material
    ```

  [third-party image]: https://github.com/afritzler/mkdocs-material
